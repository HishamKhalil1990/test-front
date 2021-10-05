import React, { useState } from "react";
import { StyleSheet,Button, View, Text, ImageBackground, Image } from "react-native";
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";

export default function CardOne({navigation,cardDim,item}){
    return(
        <ImageBackground style={styles.container}
            // source={require('../img/nike-logo.png')} // should be get from data.json
        >
            <ViewOne style={styles.viewOne} item={item} cardDim={cardDim}/>
            <ViewTwo style={styles.viewTwo} item={item} cardDim={cardDim}/>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:35,
        flexDirection:'column',
        justifyContent:'center'
    },
    viewOne:{
        height:'70%',
        width:'100%',
    },
    viewTwo:{
        height:'30%',
        width:'100%',
    }
})