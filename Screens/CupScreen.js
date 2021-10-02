import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CupScreen(){
    return(
        <SafeAreaProvider>
            <View style={styles.screen}>
                <Text>
                    Cup Screen
                </Text>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});