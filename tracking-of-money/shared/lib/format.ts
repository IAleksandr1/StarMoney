/*export function formatMoney(kopecks: number): string {
  return (kopecks / 100).toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' ₽';
}
*/

export function formatMoney(kopecks: number): string {
  const rubles = kopecks / 100;
  // Форматируем число вручную, чтобы избежать проблем с Intl
  const formatted = rubles.toFixed(2).replace('.', ',');
  return `${formatted}`;
}

const MONTHS = [
  'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
];

export function formatDayLabel(timestamp: number): string {
  const d = new Date(timestamp);
  const now = new Date();

  const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const dayMs = 86_400_000;
  const diffDays = Math.round((startOf(now) - startOf(d)) / dayMs);

  if (diffDays === 0) return 'Сегодня';
  if (diffDays === 1) return 'Вчера';
  if (diffDays > 1 && diffDays < 7) {
    return d.toLocaleDateString('ru-RU', { weekday: 'long' }); // "понедельник"
  }
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

export function formatTime(timestamp: number): string {
  const d = new Date(timestamp);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** Ключ дня в формате YYYY-MM-DD для группировки */
export function dayKey(timestamp: number): string {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}