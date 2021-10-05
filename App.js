import 'react-native-gesture-handler'
import React, { useState } from 'react';
import BottomNavigators from './Navigators/BottomNavigators';

export default function App() {
  
  const [product, setProduct] = useState([
    {id:'1', card:1,cardBackgroundImage:'',itemImg:"https://i.ibb.co/CMRLVHb/nike1.png",companyLogo:"https://i.ibb.co/WDVLfJm/nike-logo.png",salePercent:20,price:70.60,currency:"KD",endDate:"",tabColor:"#6ECB63",buttonColor:"#B1E693"},
    {id:'2', card:2},
    {id:'3', card:3},
    {id:'4', card:2},
    {id:'5', card:3},
    {id:'6', card:1,cardBackgroundImage:'',itemImg:"https://i.ibb.co/CMRLVHb/nike1.png",companyLogo:"https://i.ibb.co/WDVLfJm/nike-logo.png",salePercent:20,price:70.60,currency:"KD",endDate:"",tabColor:"#6ECB63",buttonColor:"#B1E693"},
  ])
  
  return (
    <BottomNavigators product={product}/>
  );
}