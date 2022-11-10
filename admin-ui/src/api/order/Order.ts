import { Product } from "../product/Product";

export type Order = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  product?: Product | null;
  time: string | null;
  typeOrder?: "First" | "Last" | null;
  updatedAt: Date;
};
