import 'react-native-gesture-handler'
import React, { useState } from 'react';
import BottomNavigators from './Navigators/BottomNavigators';

export default function App() {
  
  const [product, setProduct] = useState([
    {id:'1', card:1,cardBackgroundImage:'',itemImg:"https://i.ibb.co/CMRLVHb/nike1.png",companyLogo:"https://i.ibb.co/WDVLfJm/nike-logo.png",salePercent:20,price:70.60,currency:"KD",endDate:"",tabColor:"#6ECB63",buttonColor:"#B1E693"},
    {id:'2', card:2,cardBackgroundImage:'',tabColor:"#6ECB63",buttonColor:"#B1E693",title:'Answer and Win',prize:'100',currency:"KD"},
    {id:'3', card:3,cardBackgroundImage:'',tabColor:"#6ECB63",buttonColor:"#B1E693",title:'Title'},
    {id:'3', card:4,cardBackgroundImage:'',buttonColor:"#B1E693"},
    {id:'4', card:2,cardBackgroundImage:'',tabColor:"#6ECB63",buttonColor:"#B1E693",title:'Answer and Win',prize:'100',currency:"KD"},
    {id:'3', card:4,cardBackgroundImage:'',buttonColor:"#B1E693"},
    {id:'5', card:3,cardBackgroundImage:'',tabColor:"#6ECB63",buttonColor:"#B1E693",title:'Title'},
    {id:'6', card:1,cardBackgroundImage:'',itemImg:"https://i.ibb.co/CMRLVHb/nike1.png",companyLogo:"https://i.ibb.co/WDVLfJm/nike-logo.png",salePercent:20,price:70.60,currency:"KD",endDate:"",tabColor:"#6ECB63",buttonColor:"#B1E693"},
  ])
  
  return (
    <BottomNavigators product={product}/>
  );
}