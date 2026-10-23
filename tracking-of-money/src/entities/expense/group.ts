import { dayKey } from '../../../shared/lib/format';
import { Expense } from '../../store/expenses';


export type DaySection = {
  key: string;          // '2025-10-23'
  title: string;        // 'Сегодня'
  total: number;        // в копейках
  data: Expense[];
};

export function groupByDay(expenses: Expense[]): DaySection[] {
  // траты уже отсортированы новыми вперёд (мы так добавляем)
  const map = new Map<string, DaySection>();

  for (const e of expenses) {
    const key = dayKey(e.createdAt);
    if (!map.has(key)) {
      map.set(key, { key, title: '', total: 0, data: [] });
    }
    const section = map.get(key)!;
    section.data.push(e);
    section.total += e.amount;
  }

  return Array.from(map.values());
}