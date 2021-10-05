import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../Screens/ListScreen';
import DetailScreen from '../Screens/DetailsScreen';
import BasketScreen from '../Screens/BasketScreen';
import CupScreen from '../Screens/CupScreen';
import SmileScreen from '../Screens/SmileScreen';

const Stack = createStackNavigator()

function Home({product}){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='ListScreen' component={ListScreen} initialParams={{product}}/>
      <Stack.Screen name='DetailScreen' component={DetailScreen}/>
    </Stack.Navigator>
    );
  }

function Basket(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='BasketScreen' component={BasketScreen}/>
    </Stack.Navigator>
    );
  }

function Cup(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='CupScreen' component={CupScreen}/>
    </Stack.Navigator>
  );
}

function Smile(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='SmileScreen' component={SmileScreen}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({product}) {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'lightseagreen',
        }}
      >
        <Tab.Screen
          name="Home"
          children={()=><Home product={product}/>}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="filter-list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="shopping-basket" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Cup"
          component={Cup}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="award" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Smile"
          component={Smile}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="happy" color={color} size={size}/>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default function BottomNavigators({ product }){
    return(
        <NavigationContainer>
            <MyTabs product={product}/>
        </NavigationContainer>
    )
}