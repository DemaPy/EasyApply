import { CreditsPackType, PackId, getSelectedPack } from 'src/types';
import Stripe from 'stripe';

export async function HandleCheckoutSessionCompleted(
  event: Stripe.Checkout.Session,
  cb: (
    metadata: Stripe.Metadata,
    selectedPack: CreditsPackType,
  ) => Promise<any>,
) {
  if (!event.metadata) {
    throw new Error('Metadata required');
  }

  const metadata = event.metadata;

  if (!metadata.userId || !metadata.priceId) {
    throw new Error('User id and Price id required');
  }
  const selectedPack = getSelectedPack(metadata.priceId as PackId);

  if (!selectedPack) {
    throw new Error('Product not found');
  }

  await cb(metadata, selectedPack);
}
