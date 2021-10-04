import 'react-native-gesture-handler'
import React, { useState } from 'react';
import BottomNavigators from './Navigators/BottomNavigators';

export default function App() {
  
  const [product, setProduct] = useState([
    {num:1, key:'1', card:1},
    {num:2, key:'2', card:2},
    {num:3, key:'3', card:3},
    {num:4, key:'4', card:2},
    {num:5, key:'5', card:3},
    {num:6, key:'6', card:1},
  ])
  
  return (
    <BottomNavigators product={product}/>
  );
}