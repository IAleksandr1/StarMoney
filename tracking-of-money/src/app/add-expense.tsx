import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { 
  Alert, 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable, 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback 
} from "react-native";
import { ButtonCastom } from "../../shared/Button/button";
import { Input } from "../../shared/Input/input";
import { useExpenses } from "@/store/expenses";
import { Category } from "@/entities/expense/categories";
import DropdownComponent from "../../shared/Dropdown/DropdownComponent ";


export default function AddExpense() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const addExpense = useExpenses((s) => s.addExpense);
  const updateExpense = useExpenses((s) => s.updateExpense);
  const expenses = useExpenses((s) => s.expenses);

  const [category, setCategory] = useState<Category | null>(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const isEditing = !!id;

  useEffect(() => {
    if (id) {
      const exp = expenses.find((e) => e.id === id);
      if (exp) {
        setCategory(exp.category);
        setAmount((exp.amount / 100).toString());
        setNote(exp.note || "");
      }
    }
  }, [id]);

  const handleSave = () => {
    const normalized = amount.replace(",", ".").trim();
    const num = parseFloat(normalized);

    if (!category) {
      Alert.alert("Ошибка", "Выберите категорию");
      return;
    }
    if (!normalized || isNaN(num) || num <= 0) {
      Alert.alert("Ошибка", "Введите корректную сумму");
      return;
    }

    const amountInKopecks = Math.round(num * 100);

    if (isEditing && id) {
      updateExpense(id, category, amountInKopecks, note);
    } else {
      addExpense(category, amountInKopecks, note);
    }
    
    router.back();
  };

  const isFormValid = !!category && amount.trim().length > 0;

  // Если нажали на пустой фон (не на форму) - закрываем клавиатуру, а не модалку
  const handleBackdropPress = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.keyboardView} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Фон, по которому можно кликнуть, чтобы скрыть клавиатуру */}
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.backdrop}>
          
          {/* Сама форма. Клики по ней не проваливаются в фон */}
          <View style={styles.box}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>
                {isEditing ? "Редактировать" : "Новая трата"}
              </Text>
            </View>

            <View style={styles.content}>
              <View style={styles.fieldGroup}>
                <Text style={styles.lable}>Категория</Text>
                <View style={styles.dropdownWrapper}>
                  <DropdownComponent value={category} onChange={setCategory} />
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.lable}>Сумма (руб.)</Text>
                <Input
                  variant="light"
                  placeholder="0.00"
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                  inputMode="decimal"
                  style={styles.inputStyle}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.lable}>Описание</Text>
                <Input
                  variant="light"
                  placeholder="На что потратил"
                  value={note}
                  onChangeText={setNote}
                  style={styles.inputStyle}
                />
              </View>
            </View>

            <View style={styles.footer}>
              <ButtonCastom 
                text={isEditing ? "Обновить" : "Сохранить"} 
                onPress={handleSave} 
                disabled={!isFormValid}
              />
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "85%", // Вернули нормальную ширину
    maxWidth: 400,
    backgroundColor: "#F7F6F2",
    borderWidth: 2,
    borderColor: "#000",
    padding: 20,
  },
  content: {
    gap: 16,
  },
  titlebox: {
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    marginBottom: 12,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "#000",
  },
  fieldGroup: {
    gap: 6,
  },
  lable: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase",
  },
  dropdownWrapper: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 0, 
    height: 50,
  },
  footer: {
    marginTop: 24,
  },
});