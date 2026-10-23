export type Category = 'food' | 'wishes' | 'unexpected' | 'flowers' | 'transport' | 'card';

export const CATEGORY_LABEL: Record<Category, string> = {
  food: 'ЕДА',
  wishes: 'ХОТЕЛКИ',
  unexpected: 'НЕПРЕДВИДЕННОЕ',
  flowers: 'ЦВЕТЫ',
  transport: 'ТРАНСПОРТ',
  card: 'НА КАРТЕ',
};

// Для выпадающего списка (чтобы в дропдауне тоже был нужный текст)
export const CATEGORIES = Object.entries(CATEGORY_LABEL).map(([value, label]) => ({
  value: value as Category,
  label,
}));