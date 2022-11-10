import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  inStock?: boolean | null;
  isExist?: boolean | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
