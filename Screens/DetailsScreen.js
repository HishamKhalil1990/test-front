import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import ViewOne from "../Components/ViewOne";

const viewWidth = Dimensions.get('window').width
const viewHeight = Dimensions.get('window').height*0.35;
const hieght = (Dimensions.get('window').height - viewHeight*0.3)*0.45

export default function DetailScreen({navigation,route}){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{height:'100%'}}>
                <View style={styles.ads}></View>
                <View style={styles.imgView}>
                    <View style={styles.backButtonView}>
                        <TouchableOpacity
                            activeOpacity='0'
                            style={styles.button}
                            onPress={() => {navigation.navigate('ListScreen')}}
                        >
                            <MaterialIcons name="arrow-back-ios" size={26} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={{height:hieght}}>
                        <ViewOne item={route.params.item} cardDim={hieght} screen={route.params.screen}/>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2,
        backgroundColor:'pink'
    },
    button: {
        margin: 25,
        width:20
    },
    imgView:{
        height:hieght,
        width: viewWidth,
        backgroundColor:'blue',
        flexDirection:'column'
    },
    backButtonView:{
        height:hieght*0.3,
        backgroundColor:'pink'
    }

});