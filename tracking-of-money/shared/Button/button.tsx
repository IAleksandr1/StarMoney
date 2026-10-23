import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Colors } from "../tokens";

export function ButtonCastom({
  text,
  onPress,
  disabled,
  ...rest
}: PressableProps & { text: string }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...rest}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary, // Твой фиолетовый
    borderWidth: 2,
    borderColor: "#000", // Добавили рамку
    padding: 12,
    borderRadius: 10,
  },
  text: {
    color: Colors.textColor,
    fontSize: 18,
  },
  pressed: {
    backgroundColor: Colors.primaryHover,
  },
  disabled: {
    backgroundColor: "#E5E5E5", // Светло-серый
    borderColor: "#999",
  },
  textDisabled: {
    opacity: 0.7,
  },
});
