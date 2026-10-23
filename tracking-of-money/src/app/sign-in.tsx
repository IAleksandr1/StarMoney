import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { ButtonCastom } from "../../shared/Button/button";

import { Colors, Gaps } from "../../shared/tokens";
import { Input } from "../../shared/Input/input";

export default function SignIn() {
  const { signIn } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    const ok = signIn(login, password);
    if (!ok) setError("Неверный логин или пароль");
    // если ok, Stack.Protected сам откроет (tabs)
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.title}>
          <Text style={{ fontSize: 27, color: Colors.placText_gray }}>
            учёт финансов
          </Text>
        </View>
        <View style={styles.boxinputs}>
          <Input
            placeholder="Email"
            value={login}
            onChangeText={(t) => {
              setLogin(t);
              setError("");
            }}
            autoCapitalize="none"
          />
          <Input
            isPassowrd
            placeholder="Пароль"
            value={password}
            onChangeText={(t) => {
              setPassword(t);
              setError("");
            }}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <ButtonCastom text="Войти" onPress={onSubmit} />
        </View>

        <View style={styles.resetpass}>
          <Text style={{ color: Colors.links }}>Восстановать пароль</Text>
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
    alignItems: "center",
  },
  boxinputs: {
    gap: Gaps.g16,
  },
  resetpass: {
    alignItems: "center",
  },
  error: { color: "#dc2626" },
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  pressed: { backgroundColor: "#2563eb" },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
