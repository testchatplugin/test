import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  inStock?: BooleanNullableFilter;
  isExist?: BooleanNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
