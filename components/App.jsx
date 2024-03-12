/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import GuideScreen from './GuideScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTitle: '', headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Thai Guidebook"
          component={GuideScreen}
          options={{headerTransparent: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
