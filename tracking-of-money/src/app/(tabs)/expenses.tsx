/*import { FlatList, StyleSheet, Text, View } from "react-native";
import { useExpenses } from "../../store/expenses";
import { CATEGORY_LABEL } from "../../entities/expense/categories";

export default function Expenses() {
  const expenses = useExpenses((s) => s.expenses);
  const removeExpense = useExpenses((s) => s.removeExpense);

  if (expenses.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>Пока нет трат</Text>
      </View>
    );
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Итого: {(total / 100).toFixed(2)} ₽</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cat}>{CATEGORY_LABEL[item.category]}</Text>
            <Text style={styles.amount}>{(item.amount / 100).toFixed(2)} ₽</Text>
            <Text onPress={() => removeExpense(item.id)}>✕</Text>
          </View>
        )}
      />Ы
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  empty: { flex: 1, alignItems: "center", justifyContent: "center" },
  total: { fontSize: 18, fontWeight: "600", marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  cat: { flex: 1 },
  amount: { marginRight: 16 },
});*/


import { useMemo } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { useExpenses } from '../../store/expenses';
import { groupByDay } from '../../entities/expense/group';
import { ExpenseRow } from '../../entities/expense/ExpenseRow';
import { formatMoney } from '../../../shared/lib/format';
import { router } from 'expo-router';


export default function Expenses() {
  const expenses = useExpenses((s) => s.expenses);
  // Если добавил свайп-удаление, раскомментируй:
  const removeExpense = useExpenses((s) => s.removeExpense);

  const sections = useMemo(() => {
    return groupByDay(expenses).map((s) => {
      // Восстанавливаем локальную дату из ключа 'YYYY-MM-DD'
      const d = new Date(s.key + 'T00:00:00');
      
      const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
      const dayName = days[d.getDay()];
      const dayMonth = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;
      
      return {
        ...s,
        title: `${dayName}, ${dayMonth}`,
      };
    });
  }, [expenses]);

  const grandTotal = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  if (expenses.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Пока нет трат</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Шапка с общим ИТОГО */}
      <View style={styles.header}>
        <Text style={styles.headerLabel}>ИТОГО</Text>
        <Text style={styles.headerTotal}>{formatMoney(grandTotal)}<Text style={{ fontFamily: 'System' }}> ₽</Text></Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionTotal}>
              ИТОГО: {formatMoney(section.total)}<Text style={{ fontFamily: 'System' }}> ₽</Text>
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/add-expense?id=${item.id}`)}>
            <ExpenseRow 
              expense={item} 
              onDelete={() => removeExpense(item.id)} 
            />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F2',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F6F2',
  },
  emptyText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#666',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  headerLabel: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTotal: {
    fontFamily: 'monospace',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
    textTransform: 'lowercase',
  },
  sectionTotal: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});