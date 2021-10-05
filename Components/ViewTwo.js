import React from "react";
import { StyleSheet,TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function ViewTwo({item,cardDim}){
    
function goToDetails(){

        if (item.card==1){
            navigation.navigate('DetailScreen',{
                item,
                screen:2,
            });
        }
    }

    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>
            <View style={[styles.downView,{backgroundColor:item.tabColor}]}>
                <View style={styles.downRightView}>
                    {item.card==1?
                        <View style={[{marginLeft:cardDim*0.7*0.1},styles.downRightContainer]}>
                            <View style={styles.downRightInsideView}>
                                <Text style={styles.priceText1}>{item.price*0.8} {item.currency}</Text>
                                    <Text style={styles.priceText2}>{item.price} {item.currency}</Text>
                            </View>
                            <View style={styles.downRightInsideView}>
                                <Text style={styles.priceText3}>42:55:59</Text>
                            </View>
                        </View>
                        :
                        <View View style={[{marginLeft:cardDim*0.7*0.1}]}></View>
                    }

                </View>
                <View style={styles.downLeftView}>
                    <TouchableOpacity
                        style={[styles.botton,{backgroundColor:item.buttonColor}]}
                        onPress={goToDetails}
                    >    
                        <Text style={[styles.priceText3,{textAlign:'center'}]}>
                            {item.card==1?
                                'Buy Now':
                                'Play Now'
                            }
                        </Text>
                    </TouchableOpacity>
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
    },
    downRightView:{
        height:'100%',
        width:'65%',
        borderBottomLeftRadius:35,
    },
    downLeftView:{
        height:'100%',
        width:'35%',
        borderBottomRightRadius:35,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    downRightContainer:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
    },
    downRightInsideView:{
        width:'50%',
        justifyContent:'center'
    },
    priceText1:{
        fontSize:20,
        color:'#fff'
    },
    priceText2:{
        fontSize:17,
        color:'gray',
        textDecorationLine: 'line-through'
    },
    priceText3:{
        fontSize:17,
        color:'#fff',
    },
    botton:{
        height:'40%',
        width:'90%',
        borderRadius:30,
    }
})