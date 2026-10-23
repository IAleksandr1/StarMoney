import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Expense } from '../../store/expenses';
import { CATEGORY_LABEL } from './categories';
import { formatMoney } from '../../../shared/lib/format';


type Props = {
  expense: Expense;
  onDelete?: () => void;
};

export function ExpenseRow({ expense, onDelete }: Props) {
  return (
    <View style={styles.container}>
      
      {/* 1. Рамка с категорией на всю ширину */}
      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>
          {CATEGORY_LABEL[expense.category]}
        </Text>
      </View>

      {/* 2. Описание (если есть) */}
      {expense.note && (
        <Text style={styles.noteText}>{expense.note}</Text>
      )}

      {/* 3. Нижняя строка: Сумма слева, Крестик справа */}
      <View style={styles.bottomRow}>
        <Text style={styles.amountText}>
          {formatMoney(expense.amount)}
        </Text>

        {onDelete && (
          <Pressable 
            onPress={onDelete} 
            style={({ pressed }) => [
              styles.deleteBtn, 
              pressed && { opacity: 0.5 }
            ]}
            hitSlop={15}
          >
            <Text style={styles.deleteText}>[x]</Text>
          </Pressable>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderStyle: 'dashed',
    borderBottomColor: '#B0B0B0',
  },
  categoryBox: {
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F7F6F2',
    marginBottom: 8,
    // Убираем фиксированную ширину, чтобы тянулось на всю доступную
    alignSelf: 'stretch', 
  },
  categoryText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  noteText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Раздвигает сумму и крестик по краям
    alignItems: 'center', // Центрирует их по вертикали
  },
  amountText: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  deleteBtn: {
    padding: 4,
  },
  deleteText: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});