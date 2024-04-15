/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Item from './Item';
import { imageThaiNow1 } from '../assets/assets';
import {svgBasicLivingIcon, svgBusinessInvestmentIcon, svgHealthIcon, svgKidsIcon, svgLearningsIcon, svgLivingPermanentlyIcon, svgMovingToUsIcon, svgThaiPrideIcon, svgTransferIcon, svgTravelIcon} from '../assets/assets';
import { SvgUri } from 'react-native-svg';



function GuideScreen({ navigation }) {
  const [guidebookPosts, setGuidebookPosts] = React.useState(null);
  React.useEffect(() => {
    fetch(
      'https://api.searchforthai.com/api/search/guidebooks?limit=20&page=1&profileId=-1&requesterId=-1&sortByOrder=desc',
    )
      .then(response => response.json())
      .then(data => setGuidebookPosts(data.fetchResult));
  }, []);

  const catData = [
    { id: '1', title: 'Basic Living', icon: svgBasicLivingIcon, category: 'BASIC_LIVING'},
    { id: '2', title: 'Business and Investment', icon: svgBusinessInvestmentIcon, category: 'BUSINESS_AND_INVESTMENT' },
    { id: '3', title: 'Health', icon: svgHealthIcon, category: 'HEALTH' },
    { id: '4', title: 'Kids', icon: svgKidsIcon, category: 'KIDS'},
    { id: '5', title: 'Learning', icon: svgLearningsIcon, category: 'LEARNING' },
    { id: '6', title: 'Living Permanently', icon: svgLivingPermanentlyIcon, category: 'LIVING_PERMANENTLY' },
    { id: '7', title: 'Moving to US', icon: svgMovingToUsIcon, category: 'MOVING_TO_US'},
    { id: '8', title: 'Thai Pride', icon: svgThaiPrideIcon, category: 'THAI_PRIDE' },
    { id: '9', title: 'Transfer', icon: svgTransferIcon, category: 'TRANSFER' },
    { id: '10', title: 'Travel', icon: svgTravelIcon, category: 'TRAVEL' },
  ];
  // eslint-disable-next-line react/no-unstable-nested-components
  const ButtonItem = ({ title, icon, category}) => (
    <TouchableOpacity style={{marginRight: 10, marginTop: 40, backgroundColor: 'transparent', width: 100, height: 70}}
    onPress={() => navigation.navigate('Category Screen', {category: `${category}`, otherParams: `${title}`})}>
      <SvgUri uri={icon} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/guideScreenBg.png')} style={styles.headerImage} />
        <Text style={styles.headerTitle}>Thai Guide Book</Text>
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.sectionTitle}>Category</Text>
        <FlatList
          data={catData}
          renderItem={({item, icon, category}) => <ButtonItem title={item.title} icon={item.icon} category={item.category}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      <View style={styles.guidebookSection}>
        <Text style={styles.sectionTitle}>Guide Book</Text>
        <FlatList
          data={guidebookPosts}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.guidebookList}
        />
      </View>
      <Image source={{url: imageThaiNow1}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    position: 'relative',
    height: 250, // Adjust as needed
    overflow: 'hidden',
    backgroundColor: '#0C529C',
  },
  headerImage: {
    flex: 1,
    left: 100,
    width: '75%',
    height: '75%',
    resizeMode: 'cover',
  },
  headerTitle: {
    position: 'absolute',
    top: 125,
    left: 20,
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Kanit-Regular',
  },
  sectionDescription: {
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 20,
  },
  categorySection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    marginTop: -80, // Adjust as needed
    zIndex: 1,
  },
  guidebookSection: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  categoryList: {
    paddingLeft: 10,
  },
  guidebookList: {
    paddingLeft: 10,
  },
  categoryContainer: {
    backgroundColor: 'grey',
    marginVertical: 20,
    marginHorizontal: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
  },
});

export default GuideScreen;
