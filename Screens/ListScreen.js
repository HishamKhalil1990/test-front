import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,Button, View, Text, FlatList, Dimensions } from "react-native";

const viewWidth = Dimensions.get('window').width*0.8;
const viewHeight = Dimensions.get('window').height*0.35;

export default function ListScreen({ navigation, route }){

    const [product, setProduct] = useState([
        {num:1, key:'1'},
        {num:2, key:'2'},
        {num:3, key:'3'},
        {num:4, key:'4'},
        {num:5, key:'5'},
        {num:6, key:'6'},
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
                            <Text> {item.num} </Text>
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
        backgroundColor: 'pink',
        marginTop:viewHeight*0.1
    },
    ads:{
        height: viewHeight*0.3,
        borderBottomColor:'lightblue',
        borderBottomWidth: 2
    }
});