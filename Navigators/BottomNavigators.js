import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import List from '../Screens/List';
import Buy from '../Screens/Buy';

const Stack = createStackNavigator()

function Home(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={List}/>
      <Stack.Screen name='Buy' component={Buy}/>
    </Stack.Navigator>
    );
  }

function Basket(){
  return (
    <Text>Home</Text>
    );
  }

function Cup(){
  return (
    <Text>Home</Text>
  );
}

function Smile(){
  return (
    <Text>Home</Text>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
          component={Home}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Cup"
          component={Cup}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Smile"
          component={Smile}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default function BottomNavigators(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}