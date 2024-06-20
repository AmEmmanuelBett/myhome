export type PaymentCreateInput = {
  amount?: number | null;
  currency?: string | null;
  method?: "Option1" | null;
  status?: "Option1" | null;
  transactionId?: string | null;
};
