import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Contacts" component={ContactsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

  
};

export default App;
