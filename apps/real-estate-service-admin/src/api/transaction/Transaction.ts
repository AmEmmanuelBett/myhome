import { Property } from "../property/Property";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  property?: Property | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
