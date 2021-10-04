import React, { useState } from "react";
import { StyleSheet,Button, View, Text, ImageBackground, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function CardOne({navigation,circleDia}){
    return(
        <ImageBackground style={styles.container}
            // source={require('../img/nike-logo.png')} // should be get from data.json
        >
            <View style={styles.upView}>
                <View style={styles.upRightView}>
                    <Image
                        style={{height:circleDia*0.7*0.3,width:circleDia*0.7*0.3,borderRadius:circleDia*0.15*0.7,marginLeft:circleDia*0.7*0.1,marginTop:circleDia*0.7*0.1,marginBottom:circleDia*0.7*0.15}}
                        source={require('../img/nike-logo.png')} // should be get from data.json
                    />
                    <View style={{height:circleDia*0.7*0.3,backgroundColor:'black',width:'100%'}}>

                    </View>
                </View>
                <View style={styles.upLeftView}>
                    <View style={{height:circleDia*0.7*0.7,width:circleDia*0.7*0.7,borderRadius:circleDia*0.35*0.7,backgroundColor:'#fff',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{height:circleDia*0.7*0.7,width:circleDia*0.7*0.7,borderRadius:circleDia*0.35*0.7}}
                            source={require('../img/nike1.png')} // should be get from data.json
                        />
                    </View>
                </View>
            </View>
            <View style={styles.downView}>
                <View style={styles.downRightView}>

                </View>
                <View style={styles.downLeftView}>
                    
                </View>
            </View>
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
    upView:{
        height:'70%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
    },
    upRightView:{
        height:'100%',
        width:'45%',
        backgroundColor:'#FF0075',
        borderTopLeftRadius:35,
        justifyContent:'flex-start',
    },
    upLeftView:{
        height:'100%',
        width:'55%',
        backgroundColor:'#77D970',
        borderTopRightRadius:35,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    downView:{
        height:'30%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
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