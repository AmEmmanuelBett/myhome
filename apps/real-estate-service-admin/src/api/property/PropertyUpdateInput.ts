import { BookingUpdateManyWithoutPropertiesInput } from "./BookingUpdateManyWithoutPropertiesInput";
import { TransactionUpdateManyWithoutPropertiesInput } from "./TransactionUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  availableFrom?: Date | null;
  bookings?: BookingUpdateManyWithoutPropertiesInput;
  city?: string | null;
  description?: string | null;
  price?: number | null;
  state?: string | null;
  title?: string | null;
  transactions?: TransactionUpdateManyWithoutPropertiesInput;
  typeField?: "Option1" | null;
  zipcode?: string | null;
};
