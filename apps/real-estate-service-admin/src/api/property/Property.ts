import { Booking } from "../booking/Booking";
import { Transaction } from "../transaction/Transaction";

export type Property = {
  address: string | null;
  availableFrom: Date | null;
  bookings?: Array<Booking>;
  city: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  state: string | null;
  title: string | null;
  transactions?: Array<Transaction>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  zipcode: string | null;
};
