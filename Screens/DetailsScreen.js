import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const viewHeight = Dimensions.get('window').height*0.35;

export default function DetailScreen({navigation}){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.ads}></View>
                <Button title={<MaterialIcons name="arrow-back-ios" size={26} color="#fff" />} onPress={() => {navigation.navigate('ListScreen')}}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2
    }
});