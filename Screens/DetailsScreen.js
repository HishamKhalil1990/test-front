import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import ViewOne from "../Components/ViewOne";
import ViewFour from "../Components/ViewFour";

const viewWidth = Dimensions.get('window').width
const viewHeight = Dimensions.get('window').height*0.35;
const hieght = (Dimensions.get('window').height - viewHeight*0.3)*0.45
const bottomHieght = ((Dimensions.get('window').height - viewHeight*0.3)-hieght)*0.6

export default function DetailScreen({navigation,route}){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{height:'100%'}}>
                <View style={styles.ads}>
                <   Text style={{fontSize:20}}>
                        Advertisments
                    </Text>
                    <TouchableOpacity
                        style={{backgroundColor:'gray',width:"20%",borderRadius:20,justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{fontSize:20,color:'#fff'}}>
                            open
                        </Text>
                    </TouchableOpacity>
                </View>
                <ImageBackground style={styles.imgView}
                    source={{uri:route.params.item.cardBackgroundImage}} // should be get from data.json
                >
                    <View style={styles.backButtonView}>
                        <TouchableOpacity
                            activeOpacity='0'
                            style={styles.button}
                            onPress={() => {navigation.navigate('ListScreen')}}
                        >
                            <MaterialIcons name="arrow-back-ios" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={{height:hieght}}>
                        <ViewOne item={route.params.item} cardDim={hieght} screen={route.params.screen}/>
                        <View style={[styles.itemText,{marginLeft:hieght*0.7*0.1}]}>
                            <Text style={[{fontSize:25}]}>Nike Air Max 270 React</Text>
                            <Text style={[{fontSize:20,color:'gray'}]}>Men's Shoe</Text>
                        </View>
                    </View>
                    <View style={[{height:bottomHieght},{width:'90%'},{marginLeft:hieght*0.7*0.1},{marginRight:hieght*0.7*0.1}]}>
                        <ViewFour item={route.params.item}/>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    button: {
        margin: 20,
        width:20
    },
    imgView:{
        height:hieght,
        width: viewWidth,
        backgroundColor:'blue',
        flexDirection:'column'
    },
    backButtonView:{
        height:hieght*0.3,
    },
    itemText:{
        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start'
    }
});