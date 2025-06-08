export enum PackId {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
}

export type CreditsPackType = {
  id: PackId;
  name: string;
  label: string;
  credits: number;
  price: number;
  priceId: string;
};

export const CreditsPack: CreditsPackType[] = [
  {
    id: PackId.SMALL,
    name: 'Small Pack',
    label: '100 credits',
    credits: 100,
    price: 600,
    priceId: process.env.STRIPE_SMALL_PACK_PRICE_ID!,
  },
  {
    id: PackId.MEDIUM,
    name: 'Medium Pack',
    label: '250 credits',
    credits: 250,
    price: 900,
    priceId: process.env.STRIPE_MEDIUM_PACK_PRICE_ID!,
  },
];
export const getSelectedPack = (id: string) => {
  return CreditsPack.find((pack) => pack.priceId === id);
};
