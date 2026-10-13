import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../shared/Input/input";
import { Colors, Gaps } from "../../shared/tokens";
import { ButtonCastom } from "../../shared/Button/button";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.login}>
        <View style={styles.title}>
          <Text style={{fontSize: 27, color: Colors.placText_gray}}>учёт финансов</Text> 
        </View>
        <View style={styles.boxinputs}>
          <Input placeholder="Email"/>
          <Input isPassowrd placeholder="Пароль"/>
          <ButtonCastom text="Войти"/> 
        </View>
        <View style={styles.resetpass}>
          <Text style={{color: Colors.links }}>Восстановать пароль</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: "center",
    padding: 55,
  },
  login: {
    gap: Gaps.g50,
  },
  title: {
    alignItems: "center"
  },
  boxinputs: {
    gap: Gaps.g16,
  },
  resetpass: {
    alignItems: "center",
  }
});
