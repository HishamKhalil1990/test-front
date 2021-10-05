import React from "react";
import { StyleSheet,Button, View, Text, Image } from "react-native";

export default function ViewOne({item,cardDim}){
    return(
        <View style={styles.container}>
            <View style={styles.upView}>
                <View style={styles.upRightView}>
                    <Image
                        style={{height:cardDim*0.7*0.3,width:cardDim*0.7*0.3,borderRadius:cardDim*0.15*0.7,marginLeft:cardDim*0.7*0.1,marginTop:cardDim*0.7*0.1,marginBottom:cardDim*0.7*0.15}}
                        source={require('../img/nike-logo.png')} // should be get from data.json
                    />
                    <View style={{height:cardDim*0.7*0.3,backgroundColor:'black',width:'100%'}}>

                    </View>
                </View>
                <View style={styles.upLeftView}>
                    <View style={{height:cardDim*0.7*0.7,width:cardDim*0.7*0.7,borderRadius:cardDim*0.35*0.7,backgroundColor:'#fff',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{height:cardDim*0.7*0.7,width:cardDim*0.7*0.7,borderRadius:cardDim*0.35*0.7}}
                            source={require('../img/nike1.png')} // should be get from data.json
                        />
                    </View>
                </View>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container:{
        height:'70%',
        width:'100%',
    },
    upView:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:'#FF0075',
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
})