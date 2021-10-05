import React from "react";
import { StyleSheet,Button, View, Text, Image } from "react-native";

export default function ViewTwo({item,cardDim}){
    return(
        <View style={styles.container}>
            <View style={styles.downView}>
                <View style={styles.downRightView}>

                </View>
                <View style={styles.downLeftView}>
                    
                </View>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container:{
        height:'30%',
        width:'100%',
    },
    downView:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        backgroundColor:'#172774',
    },
    downRightView:{
        height:'100%',
        width:'65%',
        backgroundColor:'#172774',
        borderBottomLeftRadius:35,
    },
    downLeftView:{
        height:'100%',
        width:'35%',
        backgroundColor:'#EEEEEE',
        borderBottomRightRadius:35,
    },
})