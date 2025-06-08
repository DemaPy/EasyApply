import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  RawBodyRequest,
  Req,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { Request } from 'express';
import Stripe from 'stripe';
import { CreditsPack, PackId } from 'src/types/billing';
import { ApiResponse } from 'src/types';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('webhook')
  webhook(@Req() request: RawBodyRequest<Request>) {
    const sig = request.headers['stripe-signature'];
    const body = request.rawBody;

    if (!sig || !body) {
      throw new Error('Bad request');
    }

    return this.stripeService.webhook(body, sig);
  }

  @Post('create-checkout-session') // Define the route for creating a checkout session
  createCheckoutSession(
    @Body()
    body: {
      productId: PackId;
    },
  ): Promise<ApiResponse<Stripe.Checkout.Session['url']>> {
    const { productId } = body;
    const userId = '172ca22f-c006-4a25-8441-7325a485765e';
    const selectedPack = CreditsPack.find((pack) => pack.id === productId);

    if (!selectedPack) {
      throw new InternalServerErrorException('Product not found');
    }

    return this.stripeService.createCheckoutSession(
      selectedPack.priceId,
      userId,
    );
  }
}
