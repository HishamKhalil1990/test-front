import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import tw from 'tailwind-react-native-classnames'

const viewWidth = Dimensions.get('window').width
const viewHeight = Dimensions.get('window').height*0.35;

export default function DetailScreen({navigation}){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{height:'100%', backgroundColor:'pink'}}>
                <View style={styles.ads}></View>
                <View style={styles.imgView}>
                    <TouchableOpacity
                        activeOpacity='0'
                        style={styles.button}
                        onPress={() => {navigation.navigate('ListScreen')}}
                    >
                        <MaterialIcons name="arrow-back-ios" size={26} color="#fff" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2
    },
    button: {
        margin: 25,
        marginRight:viewWidth,
    },
    imgView:{
        height:'45%',
        width: viewWidth,
        backgroundColor:'blue'
    }
});