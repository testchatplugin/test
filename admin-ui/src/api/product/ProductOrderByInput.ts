import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inStock?: SortOrder;
  isExist?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
