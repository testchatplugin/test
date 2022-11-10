import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  code?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  time?: string | null;
  typeOrder?: "First" | "Last" | null;
};
