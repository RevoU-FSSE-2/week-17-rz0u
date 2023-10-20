export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginResponse {
  data: {
    token: string;
  };
}

export interface RegisterForm {
  username: string;
  role: string;
  password: string;
}

export interface RegisterResponse {
  data: {
    acknowledged: boolean;
    insertedId: string;
  };
}

export interface Transactions {
  _id: string;
  amount: string;
  currency: string;
  sourceAccount: string;
  destinationAccount: string;
  status: string;
}

export interface GetTransactionsResponse {
  data: Transactions[];
  current_page: number;
  total_item: number;
  total_page: number;
}

export type TransactionForm = Omit<Transactions, "_id">;

export type TransactionFormAdd = Omit<Transactions, "_id" | "status">;

export interface TransactionsApproval {
  _id: string;
  status: string;
}
