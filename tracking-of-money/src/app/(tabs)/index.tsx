import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxtitle}>
        <Text style={styles.title}>Симанов Александр</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 34,
  },
  boxtitle: {
    marginTop: 40,
    alignItems: "center",
  },
  inputText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
    gap: 10,
  },
  numbr: {},
});
