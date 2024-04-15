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

function CategoryScreen({route, navigation}) {
  const [guidebookPosts, setGuidebookPosts] = React.useState(null);
  const {category, otherParam} = route.params;
  React.useEffect(() => {
    fetch(
      `https://api.searchforthai.com/api/search/guidebooks?category=${category}&limit=20&page=1&profileId=-1&requesterId=-1&sortByOrder=desc`,
    )
      .then(response => response.json())
      .then(data => setGuidebookPosts(data.fetchResult));
  }, []);

  return (
    <View>
      <FlatList
        data={guidebookPosts}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );
}

export default CategoryScreen;
