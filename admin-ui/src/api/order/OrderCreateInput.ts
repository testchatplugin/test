import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  code?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  time?: string | null;
  typeOrder?: "First" | "Last" | null;
};
