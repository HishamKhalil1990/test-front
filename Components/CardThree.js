import React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground,Text } from "react-native";

export default function CardThree({cardDim,item}){
    return(
        <ImageBackground style={styles.container}
            // source={{uri:cardBackgroundImage}} // should be get from data.json
        >
            <TouchableOpacity
                style={[styles.button,{marginBottom:cardDim*0.7*0.1,borderRadius:cardDim*0.7*0.2,backgroundColor:item.buttonColor}]}
            >
                <Text style={{fontSize:cardDim*0.7*0.15,color:'#fff',textAlign:'center'}}>Play me</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:35,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    button:{
        width:'35%',
        height:"20%",
        alignItems:'center',
        justifyContent:'center'
    }
})