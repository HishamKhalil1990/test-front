import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ViewThree({item,cardDim}){
    return(
        <View style={styles.container}>
                {item.card == 2?
                <View style={styles.upView}>
                    <View style={[styles.leftView,{marginLeft:cardDim*0.7*0.1}]}>
                        <View style={styles.textContainer}>
                            <Text style={{fontSize:cardDim*0.7*0.3,color:"#fff"}}>
                                {item.prize} {item.currency}
                            </Text>
                        </View>
                    </View>
                </View>
                :
                <View style={styles.upView}></View>
                }
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
        alignItems:'center',
    },
    leftView:{
        height:'100%',
        width:'60%',
        justifyContent:'center',
    },
    textContainer:{
        height:'30%',
    }
})