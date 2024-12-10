export type Payment = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  method?: "Option1" | null;
  status?: "Option1" | null;
  transactionId: string | null;
  updatedAt: Date;
};
