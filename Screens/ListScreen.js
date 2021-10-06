import React, {useEffect,useState} from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Text } from "react-native";
import CardOne from "../Components/CardOne";
import CardTwo from "../Components/CardTwo";
import CardThree from "../Components/CardThree";

const viewWidth = Dimensions.get('window').width*0.9;
const viewHeight = Dimensions.get('window').height*0.35;

export default function ListScreen({route}){

    const [redo,setRedo] = useState(false)

    useEffect(()=>{
        setRedo(!redo);
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setRedo(!redo)
            console.log(1)
        },60000)
    },[redo])
    
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.ads}>
                    <Text style={{fontSize:20}}>
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
            </SafeAreaView>
            {redo?
            <FlatList
            contentContainerStyle={{
                alignItems:'center',
            }}
            data={route.params.product}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return (
                    <View style={styles.container}>
                        {item.card == 1? <CardOne cardDim={viewHeight} item={item} screen={1}/> : item.card == 2 || item.card == 3? <CardTwo cardDim={viewHeight} item={item}/> : <CardThree cardDim={viewHeight} item={item}/>}
                    </View>
                );
            }}
            />
            :
            <FlatList
            contentContainerStyle={{
                alignItems:'center',
            }}
            data={route.params.product}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return (
                    <View style={styles.container}>
                        {item.card == 1? <CardOne cardDim={viewHeight} item={item} screen={1}/> : item.card == 2 || item.card == 3? <CardTwo cardDim={viewHeight} item={item}/> : <CardThree cardDim={viewHeight} item={item}/>}
                    </View>
                );
            }}
            >
            </FlatList>
            }
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
        borderBottomWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});