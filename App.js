
import { Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// Drawer Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {

  //  Using Side Drawer Navigation
  return (
    <>
    < StatusBar style='light' />
     {/* Drawer Navigation Setup 
     <NavigationContainer>

       <Drawer.Navigator
    //     screenOptions={{
      //       headerStyle : {backgroundColor : '#3c0a6b'},
      //         headerTintColor : 'white',
      //         drawerActiveBackgroundColor : '#f0e1ff',
      //         drawerActiveTintColor : '#3c0a6b' ,
      //         // drawerStyle : {backgroundColor : '#ccc'}

      //     }}
      //   >
      //     <Drawer.Screen name="Welcome" component={WelcomeScreen}
      //       // These options only aplly to this screen, since it is set on it 
      //       options={{
        //         drawerLabel : 'Welcome Screen',
        //         drawerIcon : ({color, size})=> <Ionicons name="home" color={color} size={size} />
        //         // headerStyle : {backgroundColor : '#3c0a6b'},
        //         // headerTintColor : 'white',
        //         // drawerActiveBackgroundColor : '#f0e1ff',
        //         // drawerActiveTintColor : '#3c0a6b' ,
        //         // drawerStyle : {backgroundColor : '#ccc'}
        //       }}
        //     />
        //     <Drawer.Screen name="User" component={UserScreen}
        //       options = {{
          //         drawerIcon : ({color , size}) => {
            //          return  <Ionicons name='person' color={color} size={size} />
            //         }
            //       }}
            //     />

            //   </Drawer.Navigator>
            // </NavigationContainer>
            */}
            
        <NavigationContainer>

          <BottomTab.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#3c0a6b' },
              headerTintColor: 'white',
              tabBarActiveTintColor: '#3c0a6b'

            }}
          >
            <BottomTab.Screen name="Welcome" component={WelcomeScreen}
              // These options only aplly to this screen, since it is set on it 
              options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
              }}
            />
            <BottomTab.Screen name="User" component={UserScreen}
              options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
              }}
            />

          </BottomTab.Navigator>
        </NavigationContainer>
      </>
      )
      ;
}
