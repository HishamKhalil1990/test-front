import React,{useState,useEffect} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import countDownClock from "./Clock";

function goToDetails(){}

export default function ViewFour({item}){

    const [time,setTime] = useState([])
    const [redo,setRedo] = useState(false)

    useEffect(()=>{
        if (item.card == 1){
            const itemTime = countDownClock(item.enddate,item.endtime)
        setTime(itemTime.timing1)
        }
    },[])


    useEffect(()=>{
        setRedo(!redo);
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setRedo(!redo)
            const itemTime = countDownClock(item.enddate,item.endtime)
            setTime(itemTime.timing1)
        },1000)
    },[redo])

    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.text1}>
                    Available units: {item.pcs} pcs
                </Text>
            </View>
            <View style={styles.view2}>
                <View style={styles.textView1}>
                    <Text style={styles.text2}>
                        Offers Ends in:
                    </Text>
                </View>
                <View style={styles.timer}>
                    <Text style={styles.text3}>
                        {time[0]}  : {"\n"} Days
                    </Text>
                    <Text style={styles.text3}>
                        {time[1]}  : {"\n"} hr
                    </Text>
                    <Text style={styles.text3}>
                        {time[2]}  : {"\n"} min
                    </Text>
                    <Text style={styles.text3}>
                        {time[3]}   {"\n"} sec
                    </Text>
                </View>
            </View>
            <View style={styles.view3}>
                <View style={[styles.container2]}>
                    <View style={styles.insideView}>
                        <View style={styles.downLeftView}>
                            <Text style={styles.priceText1}>{Math.floor(item.price*(100-item.salepercent)/100)} {item.currency}</Text>
                            <Text style={styles.priceText2}>{item.price} {item.currency}</Text>
                        </View>
                    </View>
                    <View style={styles.insideView2}>
                        <TouchableOpacity
                            style={[styles.botton,{backgroundColor:item.buttoncolor}]}
                        >    
                            <Text style={[styles.priceText3,{textAlign:'center'}]}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'space-around',
    },
    view1:{
        height:'25%',
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    text1:{
        fontSize:18
    },
    view2:{
        height:'35%',
        width:'100%',
        backgroundColor:'gray',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textView1:{
        height:'100%',
        width:'40%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        fontSize:18
    },
    text3:{
        color:'#fff',
        fontSize:18
    },
    timer:{
        height:'100%',
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    view3:{
        height:'30%',
        width:'100%',
    },
    container2:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    insideView:{
        height:'100%',
        width:'50%',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    insideView2:{
        height:'100%',
        width:'50%',
        alignItems:'flex-end',
        justifyContent:'center',
    },
    priceText1:{
        fontSize:20,
        color:'black'
    },
    priceText2:{
        fontSize:17,
        color:'orange',
        textDecorationLine: 'line-through'
    },
    downLeftView:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    botton:{
        height:'100%',
        width:'90%',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    priceText3:{
        fontSize:25,
        color:'#fff',
    },
})