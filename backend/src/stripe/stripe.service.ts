import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { responseObject } from 'src/utils/lib';
import { getAppUrl } from 'src/utils/lib/appUrl';
import { HandleCheckoutSessionCompleted } from 'src/utils/lib/stripe/handleCheckoutSessionCompleted';
import { MailServcie } from 'src/mail/mail.service';
import { ApiResponse } from 'src/types';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailServcie,
  ) {
    this.stripe = new Stripe(process.env.STRIPE_API_KEY!, {
      apiVersion: '2025-02-24.acacia',
    });
  }

  async webhook(body: string | Buffer, sig: string | string[]) {
    let event: Stripe.Event;
    try {
      event = this.stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_KEY!,
      );

      if (event.type === 'checkout.session.completed') {
        const eventDataObject = event.data.object;
        const sesionId = eventDataObject.id;
        const currency = eventDataObject.currency;
        const amount = eventDataObject.amount_total;
        const customerEmail = eventDataObject.customer_details?.email;

        if (!customerEmail) {
          throw new Error('Email required');
        }

        await HandleCheckoutSessionCompleted(
          eventDataObject,
          async (metadata, selectedPack) => {
            const userId = metadata.userId;
            const credits = selectedPack.credits;
            const description = `${selectedPack.name} - ${selectedPack.credits} credits`;

            await this.prisma.userBalance.upsert({
              where: {
                userId,
              },
              create: {
                userId,
                credits,
              },
              update: {
                credits: {
                  increment: credits,
                },
              },
            });
            await this.prisma.userPurchase.create({
              data: {
                userId,
                stripeId: sesionId,
                currency: currency ?? '',
                amount: amount ?? 0,
                description,
              },
            });
            await this.mail.sendConfirmationCreditsEmail({
              to: customerEmail,
              subject: `Credits purchase confirmation: ${description}`,
              pack: selectedPack,
            });
          },
        );
      }
    } catch (error: unknown) {
      console.error('Error webhook', error);
      throw new InternalServerErrorException('Failed to handle webhook');
    }
  }

  async createCheckoutSession(
    priceId: string,
    userId: string,
  ): Promise<ApiResponse<Stripe.Checkout.Session['url']>> {
    try {
      const session = await this.stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: getAppUrl('billing/1'),
        cancel_url: getAppUrl('billing/0'),
        metadata: {
          userId,
          priceId,
        },
      });

      return responseObject({
        data: session.url,
      });
    } catch (error) {
      console.error('Error creating session:', error);
      throw new InternalServerErrorException(
        'Failed to create checkout session',
      );
    }
  }
}
