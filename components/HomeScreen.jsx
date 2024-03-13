/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
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
          }}>
          CONNECTING THAI OVERSEAS {'\n'}
          เชื่อมโยงคนไทย ในต่างแดน
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 10,
            color: 'navy',
          }}
          onPress={() => navigation.navigate('Thai Guidebook')}>
          Thai Guide Book
        </Text>
        <Image
          source={require('../assets/rightArrow.png')}
          style={{height: 20, width: 20, marginTop: 23, marginLeft: 160}}
        />
      </View>
      <FlatList
        data={guidebookPosts}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <View>
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
