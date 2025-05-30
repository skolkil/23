
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export interface Transaction {
  id: string;
  userId: string;
  date: string; // ISO string date yyyy-mm-dd
  category: string; // Category name
  amount: number;
  type: TransactionType;
  description?: string;
  // Fields for recurring transactions
  isRecurring?: boolean; // Is this transaction a recurring rule?
  recurrenceId?: string; // If generated, ID of the parent recurring rule
  originalRuleDate?: string; // For rules and generated, the original start date of the rule
  isGenerated?: boolean; // Was this transaction auto-generated?
}

export interface User {
  id: string;
  username: string;
  // Password hash would be stored in a real backend,
  // For localStorage demo, we'll store a simple password (highly insecure)
}

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

// For new charts
export interface MonthlyDataPoint {
  month: string; // "YYYY-MM" for logic
  displayName: string; // "Month YYYY" for display
  income: number;
  expense: number;
}

export interface BalanceDataPoint {
  date: string; // "YYYY-MM-DD"
  displayDate: string; // "DD.MM.YYYY" for display
  balance: number;
}

export interface BudgetSettings {
  userId: string;
  monthlyExpenseLimit: number | null; // null if not set
}
    