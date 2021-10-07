import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import ViewTwo from "./ViewTwo";
import ViewThree from "./ViewThree";

export default function CardOne({cardDim,item,screen}){
    return(
        <ImageBackground style={styles.container}
            imageStyle={{ borderRadius: 35}}
            source={{uri:item.cardbackgroundimage}} // should be get from data.json
        >
            <ViewThree  item={item} cardDim={cardDim}/>
            <ViewTwo  item={item} cardDim={cardDim} screen={screen}/>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:35,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'pink'
    },
})