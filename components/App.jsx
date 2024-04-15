import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import GuideScreen from './GuideScreen';
import CategoryScreen from './CategoryScreen';
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
          options={{
            headerShown: true,
            headerTransparent: true,
            headerBackButtonMenuEnabled: false,
          }}
        />
        <Stack.Screen
          name="Category Screen"
          component={CategoryScreen}
          options={({route}) => ({
            headerTitle: route.params.otherParams,
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
