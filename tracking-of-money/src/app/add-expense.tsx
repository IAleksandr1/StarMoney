import { Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function AddExpense() {
  return (
    <Pressable style={styles.backdrop} onPress={() => router.back()}>
      <Pressable style={styles.box} onPress={() => {}}>
        <Text style={styles.title}>Добавить трату</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  title: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
});