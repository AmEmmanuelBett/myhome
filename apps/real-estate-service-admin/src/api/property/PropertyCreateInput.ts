import { BookingCreateNestedManyWithoutPropertiesInput } from "./BookingCreateNestedManyWithoutPropertiesInput";
import { TransactionCreateNestedManyWithoutPropertiesInput } from "./TransactionCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  availableFrom?: Date | null;
  bookings?: BookingCreateNestedManyWithoutPropertiesInput;
  city?: string | null;
  description?: string | null;
  price?: number | null;
  state?: string | null;
  title?: string | null;
  transactions?: TransactionCreateNestedManyWithoutPropertiesInput;
  typeField?: "Option1" | null;
  zipcode?: string | null;
};
