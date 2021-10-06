import 'react-native-gesture-handler'
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavigators from './Navigators/BottomNavigators';
import getData from './FetchingAPIs/APIs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [logged,setLogged] = useState(false)
  const [source,setSource] = useState('');
  const [fetched,setFetched] = useState(false)
  const [product, setProduct] = useState([])
  
  useEffect(() => {

    async function status(data){
      if (data != undefined){
        setProduct(data.data)
        setFetched(true)
      }
      return true
    }

    async function fetchData(){
      const data = await getData(source)
      const fetchStatus = await status(data)
        
      }
    
    fetchData()

  },[logged])

  return (
    <SafeAreaProvider>
      {logged?
        <View style={styles.containerOne}>
          {fetched?
          <BottomNavigators product={product}/>
          :
          <View style={[styles.containerOne,styles.containerTwo]}>
            <View style={styles.view}>
              <Text style={styles.text}>waitting data</Text>
            </View>
          </View>
        }
        </View>
      :
        <View style={[styles.containerOne,styles.containerTwo]}>
          <View style={styles.view}>
            <Text style={styles.text}>Please choose the Type of {"\n"} fetching data</Text>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity 
              style={styles.btu}
              onPress={()=>{setSource('local'),setLogged(true)}}
            >
              <Text style={styles.text2}>
                Local Data
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btu}
              onPress={()=>{setSource('API'),setLogged(true)}}
            >
              <Text style={styles.text2}>
                Using APIs
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  containerOne:{
    height:'100%',
    width:'100%'
  },
  containerTwo:{
    justifyContent:'center',
    alignItems:'center'
  },
  view:{
    height:'30%',
    width:'65%',
    backgroundColor:'lightblue',
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center'
  },
  view2:{
    height:'30%',
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20
  },
  btu:{
    height:'20%',
    width:'45%',
    backgroundColor:"#6ECB63",
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  text2:{
    color:"#fff",
    fontSize:20,
    fontWeight:'bold'
  }
})