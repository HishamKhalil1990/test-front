import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from "react-native";

export default function List({ navigation, route }){
    return(
        <SafeAreaProvider>
            <Button onPress={() => {navigation.navigate('Buy')}}>
                List
            </Button>
        </SafeAreaProvider>
    );
}