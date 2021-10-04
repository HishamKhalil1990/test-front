import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,Button, View, Text, FlatList, Dimensions } from "react-native";
import CardOne from "../Components/CardOne";
import CardTwo from "../Components/CardTwo";
import CardThree from "../Components/CardThree";

const viewWidth = Dimensions.get('window').width*0.9;
const viewHeight = Dimensions.get('window').height*0.35;

export default function ListScreen({ navigation, route }){

    const [product, setProduct] = useState([
        {num:1, key:'1', card:1},
        {num:2, key:'2', card:2},
        {num:3, key:'3', card:3},
        {num:4, key:'4', card:2},
        {num:5, key:'5', card:3},
        {num:6, key:'6', card:1},
    ])
    
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.ads}></View>
                <Button title="press" onPress={() => {navigation.navigate('DetailScreen')}}/>
            </SafeAreaView>
            <FlatList
                contentContainerStyle={{
                    alignItems:'center',
                }}
                data={product}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            {item.card == 1? <CardOne circleDia={viewHeight}/> : item.card == 2? <CardTwo/> : <CardThree/>}
                        </View>
                    );
                }}
            />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        height: viewHeight,
        width:viewWidth,
        marginTop:viewHeight*0.1,
    },
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2
    }
});