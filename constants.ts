
import { Category, TransactionType } from './types';

export const APP_NAME = "My Money Manager";

export const DEFAULT_EXPENSE_CATEGORIES: Category[] = [
  { id: 'food', name: 'Їжа', type: TransactionType.EXPENSE },
  { id: 'transport', name: 'Транспорт', type: TransactionType.EXPENSE },
  { id: 'housing', name: 'Житло', type: TransactionType.EXPENSE },
  { id: 'entertainment', name: 'Розваги', type: TransactionType.EXPENSE },
  { id: 'health', name: 'Здоров\'я', type: TransactionType.EXPENSE },
  { id: 'clothes', name: 'Одяг', type: TransactionType.EXPENSE },
  { id: 'education', name: 'Освіта', type: TransactionType.EXPENSE },
  { id: 'utilities', name: 'Комунальні послуги', type: TransactionType.EXPENSE },
  { id: 'other_expense', name: 'Інші витрати', type: TransactionType.EXPENSE },
];

export const DEFAULT_INCOME_CATEGORIES: Category[] = [
  { id: 'salary', name: 'Зарплата', type: TransactionType.INCOME },
  { id: 'freelance', name: 'Фріланс', type: TransactionType.INCOME },
  { id: 'investment', name: 'Інвестиції', type: TransactionType.INCOME },
  { id: 'gift', name: 'Подарунок', type: TransactionType.INCOME },
  { id: 'other_income', name: 'Інші доходи', type: TransactionType.INCOME },
];

export const ALL_CATEGORIES: Category[] = [...DEFAULT_EXPENSE_CATEGORIES, ...DEFAULT_INCOME_CATEGORIES];

export const LOCAL_STORAGE_USERS_KEY = 'moneyManagerUsers';
export const LOCAL_STORAGE_TRANSACTIONS_KEY = 'moneyManagerTransactions';
export const LOCAL_STORAGE_BUDGET_SETTINGS_KEY = 'moneyManagerBudgetSettings';
    