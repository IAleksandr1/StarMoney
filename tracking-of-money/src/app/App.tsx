import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxtitle}>
        <Text style={styles.title}>учёт финансов</Text>
        <Text>проект Симанова Александра</Text>
      </View>
      
      

      <View>
        <View style={styles.inputText}>
          <Text style={styles.numbr}>Введите сумму:</Text>
          <TextInput style={styles.numbr} value="3000"/>
        </View>
      </View>
        <Button title="сохранить" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightyellow",
    
  },
  title: {
    color: "black",
    fontSize: 34,
  },
  boxtitle: {
    marginTop: 40,
    alignItems: "center"
  },
  inputText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
    gap: 10,
  },
  numbr: {
  }
});
