import { Text, View, StyleSheet } from "react-native";

export default function Expenses() {
  return (
    <View style={styles.container}>
        <Text>потратил</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})