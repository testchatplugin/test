import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  time?: StringNullableFilter;
  typeOrder?: "First" | "Last";
};
