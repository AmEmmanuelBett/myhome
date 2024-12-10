import { Property } from "../property/Property";
import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  property?: Property | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
