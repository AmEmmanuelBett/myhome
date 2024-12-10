import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  availableFrom?: DateTimeNullableFilter;
  bookings?: BookingListRelationFilter;
  city?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  state?: StringNullableFilter;
  title?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  typeField?: "Option1";
  zipcode?: StringNullableFilter;
};
