import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  inStock: boolean | null;
  isExist: boolean | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
