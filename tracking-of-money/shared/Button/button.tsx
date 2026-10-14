import {View, StyleSheet, Text, PressableProps, Pressable } from "react-native";
import { Colors } from "../tokens";

export function ButtonCastom({ text, onPress }: PressableProps & { text: string} ) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 12
    },
    text: {
        color: Colors.textColor,
        fontSize: 18,
    },
    pressed: {
        backgroundColor: Colors.primaryHover,
    }
})