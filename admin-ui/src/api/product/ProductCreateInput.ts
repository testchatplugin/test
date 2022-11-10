import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  inStock?: boolean | null;
  isExist?: boolean | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
