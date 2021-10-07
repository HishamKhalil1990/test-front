import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ViewOne({item,cardDim,screen}){

    return(
        <View style={styles.container}>
            <View style={styles.upView}>
                <View style={[styles.upRightView,screen==1? styles.urw1 : styles.urw2]}>
                    <View style={{height:cardDim*0.7*0.3,width:'100%',marginLeft:cardDim*0.7*0.1,marginBottom:cardDim*0.7*0.15,marginTop:cardDim*0.7*0.1,flexDirection:'row', alignItems:'center'}}>
                        {screen==1?
                        <Text/>
                        :
                        <Text style={{fontWeight:10,fontWeight:'bold'}}>Brought to you by </Text>
                        }
                        <Image
                            style={{height:cardDim*0.7*0.3,width:cardDim*0.7*0.3,borderRadius:cardDim*0.15*0.7}}
                            source={{uri:item.companylogo}} // should be get from data.json
                        />
                    </View>
                    <View style={{height:cardDim*0.7*0.3,width:'100%',justifyContent:'center',flexDirection:'column',marginLeft:cardDim*0.7*0.1}}>
                        <View style={screen==1? styles.textView : styles.textView2}>
                            <Text style={screen==1?styles.text1:styles.text3}>FLASH SALE</Text>
                        </View>
                        <Text style={styles.text2}>{item.salepercent}% OFF </Text>
                    </View>
                </View>
                <View style={[styles.upLeftView,screen==1? styles.ulw1 : styles.ulw2]}>
                    <View style={{height:cardDim*0.7*0.7,width:cardDim*0.7*0.7,borderRadius:cardDim*0.35*0.7,backgroundColor:'#fff',marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{height:cardDim*0.8*0.7,width:cardDim*0.8*0.7,borderRadius:cardDim*0.4*0.7}}
                            source={{uri:item.itemimg}} // should be get from data.json
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
    },
    upRightView:{
        height:'100%',
        justifyContent:'flex-start',
    },
    urw1:{
        width:'40%'
    },
    urw2:{
        width:'50%'
    },
    upLeftView:{
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    ulw1:{
        width:'60%'
    },
    ulw2:{
        width:'50%'
    },
    textView:{
        height:'40%',
        width:'50%',
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textView2:{
        height:'40%',
        width:'40%',
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    text1:{
        fontSize:10,
        textAlign:'center'
    },
    text2:{
        fontWeight:'bold',
        fontSize:30
    },
    text3:{
        fontSize:10,
        textAlign:'center'
    },
})