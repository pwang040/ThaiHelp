/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

function GuideScreen({navigation}) {
  return (
    <View>
      <Text style={{marginTop: 50}}>GuideScreen underconstruction</Text>
      <Button title="go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default GuideScreen;
