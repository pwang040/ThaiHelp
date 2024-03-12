/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Item = ({item}) => {
  return (
    <View style={{width: 300, height: 250, margin: 20}}>
      <TouchableOpacity style={{width: '100%', height: '100%'}}>
        <Image
          style={{flex: 1, width: null, height: null}}
          source={{uri: item.details.bannerUrl}}
          resizeMode="cover"
        />
        <View style={{paddingVertical: 20}}>
          <Text>{'categories'[item.details.category]}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {item.details.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
