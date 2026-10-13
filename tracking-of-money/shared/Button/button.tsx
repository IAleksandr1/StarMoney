import {View, StyleSheet, Text, PressableProps, Pressable } from "react-native";
import { Colors } from "../tokens";
import { useState } from "react";


export function ButtonCastom({text, ...props}: PressableProps & { text: string } & {isHover?: boolean}) {
    const [isHover, useIsHover] = useState(false);

    return (
        <Pressable {...props}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
            
        </Pressable>
    )
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
    }
})