import React, {useEffect, useState} from "react";
import { StyleSheet,TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import countDownClock from "./Clock";

export default function ViewTwo({item,cardDim}){

    const [time,setTime] = useState('')

    useEffect(()=>{
        if (item.card == 1){
            const itemTime = countDownClock(item.enddate,item.endtime)
        setTime(itemTime.timing2)
        }
    },[])
    
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
            <View style={[styles.downView,{backgroundColor:item.tabcolor}]}>
                <View style={styles.downRightView}>
                    {item.card==1?
                        <View style={[{marginLeft:cardDim*0.7*0.1},styles.downRightContainer]}>
                            <View style={styles.downRightInsideView}>
                                <Text style={styles.priceText1}>{Math.floor(item.price*(100-item.salepercent)/100)} {item.currency}</Text>
                                <Text style={styles.priceText2}>{item.price} {item.currency}</Text>
                            </View>
                            <View style={styles.downRightInsideView}>
                                <Text style={styles.priceText3}>{time}</Text>
                            </View>
                        </View>
                        :
                        <View View style={[{marginLeft:cardDim*0.7*0.1},{height:"100%",width:"100%"}]}>
                            <View style={styles.textView}>
                                <Text style={styles.priceText1}>
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    }

                </View>
                <View style={styles.downLeftView}>
                    <TouchableOpacity
                        style={[styles.botton,{backgroundColor:item.buttoncolor}]}
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
    },
    downLeftView:{
        height:'100%',
        width:'35%',
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
    },
    textView:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
    }
})