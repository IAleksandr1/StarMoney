/*import EyeClosedIcon from "@/assets/icons/eye-closed";
import EyeOpendIcon from "@/assets/icons/eye-opened";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import { Colors } from "../tokens";

export default function Input(
  props: TextInputProps & { isPassowrd?: boolean },
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <View>
      <TextInput
        style={[styles.input, props.style]} // ← массив, а не замена
        secureTextEntry={props.isPassowrd && !isPasswordVisible}
        placeholderTextColor={Colors.placText_gray}
        {...props}
      />

      {props.isPassowrd && (
        <Pressable
          onPress={() => setIsPasswordVisible((state) => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpendIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
    color: Colors.textColor,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
});
*/

import EyeClosedIcon from "@/assets/icons/eye-closed";
import EyeOpendIcon from "@/assets/icons/eye-opened";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "../tokens";

type Props = TextInputProps & {
  isPassowrd?: boolean;
  variant?: 'default' | 'light';
};

export function Input({ isPassowrd, variant = 'default', style, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <View>
      <TextInput
        style={[styles.input, variant === 'light' && styles.inputLight, style]}
        secureTextEntry={isPassowrd && !isPasswordVisible}
        placeholderTextColor={
          variant === 'light' ? Colors.placText_gray : Colors.placText_gray
        }
        {...rest}
      />

      {isPassowrd && (
        <Pressable
          onPress={() => setIsPasswordVisible(s => !s)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpendIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
    color: Colors.textColor,
  },
  inputLight: {
    backgroundColor: '#F2F2F7',   // светло-серый, как в iOS
    color: Colors.black,          // тёмный текст
    // или '#fff' + borderWidth: 1, borderColor: '#ddd' — на твой вкус
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
});