import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Category } from "../entities/expense/categories";

export type Expense = {
  id: string;
  category: Category;
  amount: number; // в копейках
  createdAt: number;
  note?: string;
};

type State = {
  expenses: Expense[];
  addExpense: (category: Category, amount: number, note: string) => void;
  updateExpense: (
    id: string,
    category: Category,
    amount: number,
    note: string,
  ) => void;
  removeExpense: (id: string) => void;
  clearAll: () => void;
};

export const useExpenses = create<State>()(
  persist(
    (set) => ({
      expenses: [],

      addExpense: (category, amount, note) =>
        set((s) => ({
          expenses: [
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
              category,
              amount,
              createdAt: Date.now(),
              note,
            },
            ...s.expenses,
          ],
        })),
      updateExpense: (id, category, amount, note) =>
        set((s) => ({
          expenses: s.expenses.map((e) =>
            e.id === id
              ? { ...e, category, amount, note: note?.trim() || undefined }
              : e,
          ),
        })),

      removeExpense: (id) =>
        set((s) => ({ expenses: s.expenses.filter((e) => e.id !== id) })),

      clearAll: () => set({ expenses: [] }),
    }),
    {
      name: "expenses-storage",
      storage: createJSONStorage(() => AsyncStorage),
      version: 1,
    },
  ),
);
