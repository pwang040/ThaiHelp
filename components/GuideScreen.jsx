/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button, ScrollView, Image, FlatList} from 'react-native';
import Item from './Item';

const Category = ({title}) => (
  <View
    style={{
      backgroundColor: 'grey',
      marginTop: 20,
      marginHorizontal: 10,
      height: 100,
      width: 100
    }}>
    <Text style={{    fontSize: 16,}}>{title}</Text>
  </View>
);

function GuideScreen({navigation}) {
  const [guidebookPosts, setGuidebookPosts] = React.useState(null);
  React.useEffect(() => {
    fetch(
      'https://api.searchforthai.com/api/search/guidebooks?limit=20&page=1&profileId=-1&requesterId=-1&sortByOrder=desc',
    )
      .then(response => response.json())
      .then(data => setGuidebookPosts(data.fetchResult));
  }, []);

  const catData = [
    {
      id: '1',
      title: 'Basic Living',
    },
    {
      id: '2',
      title: 'Business and Investment',
    },
    {
      id: '3',
      title: 'Health',
    },
    {
      id: '4',
      title: 'Kids',
    },
    {
      id: '5',
      title: 'Learning',
    },
    {
      id: '6',
      title: 'Living Permenantly',
    },
    {
      id: '7',
      title: 'Moving to US',
    },
    {
      id: '8',
      title: 'Thai Pride',
    },
    {
      id: '9',
      title: 'Transfer',
    },
    {
      id: '10',
      title: 'Travel',
    },
  ];

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#0C529C',
          width: '100%',
          height: 200,
        }}>
        <Image
          source={require('../assets/guideScreenBg.png')}
          style={{
            width: 285,
            height: 280,
            position: 'relative',
            top: 20,
            left: 130,
            backgroundColor: '#0C529C',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            top: 150,
            left: 20,
            fontSize: 26,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Kanit-Regular',
          }}>
          Thai Guide Book
        </Text>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            position: 'absolute',
            width: '100%',
            height: '130%',
            top: 200,
          }}>
          <Text style={{textAlign: 'left', paddingTop: 20, paddingLeft: 10}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </Text>
          <Text
            style={{
              paddingTop: 40,
              paddingLeft: 10,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Category
          </Text>
          <FlatList
            data={catData}
            renderItem={({item}) => <Category title={item.title} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={{position: 'relative', top: 200}}>
          <Text>Guidebook</Text>
          <FlatList
            data={guidebookPosts}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default GuideScreen;
