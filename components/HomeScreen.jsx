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
import Item from './Item';
import {WebView} from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';

function HomeScreen({navigation}) {
  const [guidebookPosts, setGuidebookPosts] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = React.useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  React.useEffect(() => {
    fetch(
      'https://api.searchforthai.com/api/search/guidebooks?limit=20&page=1&profileId=-1&requesterId=-1&sortByOrder=desc',
    )
      .then(response => response.json())
      .then(data => setGuidebookPosts(data.fetchResult));
  }, []);

  return (
    <ScrollView>
      <View style={{backgroundColor: 'black'}}>
        <Image
          source={require('../assets/ThaiHelp_BG.jpeg')}
          style={{width: 375, height: 272, opacity: 0.6}}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 125,
            marginLeft: 30,
            textAlign: 'center',
            position: 'absolute',
            fontFamily: 'Kanit-Regular',
          }}>
          CONNECTING THAI OVERSEAS {'\n'}
          เชื่อมโยงคนไทย ในต่างแดน
        </Text>
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', alignContent: 'space-between'}}
        onPress={() => navigation.navigate('Thai Guidebook')}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 10,
            color: 'navy',
            fontFamily: 'Kanit-Regular',
          }}
          onPress={() => navigation.navigate('Thai Guidebook')}>
          Thai Guide Book
        </Text>
        <Image
          source={require('../assets/rightArrow.png')}
          style={{height: 20, width: 20, marginTop: 23, marginLeft: 160}}
        />
      </TouchableOpacity>
      <FlatList
        data={guidebookPosts}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <View
        style={{
          height: 5,
          width: '100%', // Adjust the width of the divider as needed
          backgroundColor: 'lightgray', // Change the color of the divider
          alignSelf: 'center',
        }}
      />
      <View style={{marginTop: 20}}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={'ETlr0LGl6kA'}
          onChangeState={onStateChange}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
