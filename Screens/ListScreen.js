import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CardOne from "../Components/CardOne";
import CardTwo from "../Components/CardTwo";
import CardThree from "../Components/CardThree";

const viewWidth = Dimensions.get('window').width*0.9;
const viewHeight = Dimensions.get('window').height*0.35;

export default function ListScreen({route}){
    
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.ads}></View>
            </SafeAreaView>
            <FlatList
                contentContainerStyle={{
                    alignItems:'center',
                }}
                data={route.params.product}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            {item.card == 1? <CardOne cardDim={viewHeight} item={item} screen={1}/> : item.card == 2? <CardTwo cardDim={viewHeight} item={item}/> : <CardThree cardDim={viewHeight} item={item}/>}
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