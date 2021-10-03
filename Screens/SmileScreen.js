import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SmileScreen(){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.screen}>
                <Text>
                    Smile Screen
                </Text>
            </SafeAreaView>
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