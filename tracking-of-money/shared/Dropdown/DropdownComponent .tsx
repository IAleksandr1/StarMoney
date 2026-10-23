import { CATEGORIES, Category } from "@/entities/expense/categories";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";


type Props = {
  value: Category | null;
  onChange: (value: Category) => void;
};

const DropdownComponent = ({ value, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={CATEGORIES}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Выберите..."
        value={value}
        onChange={(item) => onChange(item.value)}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  placeholderStyle: { 
    fontFamily: 'monospace',
    fontSize: 16, 
    color: "#999" 
  },
  selectedTextStyle: { 
    fontFamily: 'monospace',
    fontSize: 16,
    color: "#000",
    fontWeight: 'bold'
  },
});