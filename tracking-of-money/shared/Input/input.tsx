import EyeClosedIcon from "@/assets/icons/eye-closed";
import EyeOpendIcon from "@/assets/icons/eye-opened";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "../tokens";

export function Input(props: TextInputProps & { isPassowrd?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={props.isPassowrd && !isPasswordVisible}
                placeholderTextColor={Colors.placText_gray}
                {...props}
            />

            {props.isPassowrd && <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>
                {isPasswordVisible ? <EyeOpendIcon /> : <EyeClosedIcon /> }
            </Pressable>}
        </View> 
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: 10,
        fontSize: 16,
        color: Colors.textColor 
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 17
    }
})   