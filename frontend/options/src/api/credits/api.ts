import { ApiResponse } from "@/types";
import { api } from "../init";

export enum PackId {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
}

export const getCredits = (userId: string): Promise<ApiResponse<number>> => {
  return api({
    url: `/credits/${userId}`,
  });
};

const buyPack = async (productId: PackId): Promise<ApiResponse<string>> => {
  return api({
    url: "/stripe/create-checkout-session",
    options: {
      method: "POST",
      body: JSON.stringify({ productId }),
    },
  });
};

export const buySmallPack = () => buyPack(PackId.SMALL);

export const buyMediumPack = () => buyPack(PackId.MEDIUM);
