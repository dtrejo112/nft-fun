import React,  {Suspense} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
const NftList = React.lazy(() => import("./list.js"));

export default function MyWebSite(props) {
  return (
    <ImageBackground
      style={[styles.group, styles.group_layout]}
      source={require('../assets/7e9a148facec3e9c27b4cf66983f064c.png')}
      resizeMode="cover">
      <View style={[styles.flex, styles.flex_layout1]}>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.img, styles.img_layout]}
            source={require('../assets/d43392e4d6391048941cb3bf61eb741f.png')}
          />
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.hero_title_box, styles.hero_title_box_layout]}>
            <Text style={styles.hero_title} ellipsizeMode={'clip'}>
              {'Danny’s NFTS'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group1, styles.group1_layout]}>
            <View style={[styles.flex1, styles.flex1_layout]}>
            <TouchableOpacity style={[styles.flex1, styles.flex1_layout]}>
              <View style={styles.flex1_space} />
              <View style={styles.flex1_col}>
                <ImageBackground
                  style={[styles.icon, styles.icon_layout]}
                  source={require('../assets/cc69a38185fa81921b3cb71cb2f104ad.png')}
                />
              </View>
              <View style={styles.flex1_space1} />
              <View style={styles.flex1_col1}>
                <View style={[styles.year_one_box, styles.year_one_box_layout]}>
                  <Text style={styles.year_one} ellipsizeMode={'clip'}>
                    {'Year One'}
                  </Text>
                </View> 
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
            <Suspense fallback={<div>Loading...</div>}>
                <NftList />
            </Suspense>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    group: {
      width: '100%',
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    },
    group_layout: {
      overflow: 'hidden',
      marginTop: 0,
      marginBottom: 0,
      minHeight: 1024,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 0
    },
    flex: {},
    flex_layout1: {
      overflow: 'visible',
      marginTop: 67,
      marginBottom: 67,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 0
    },
    flex_row: {
      flexGrow: 0,
      flexShrink: 1
    },
    img: {
      resizeMode: 'contain'
    },
    img_layout: {
      marginTop: 0,
      height: 200,
      marginBottom: 34,
      width: 200,
      minWidth: 200,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    hero_title_box_layout: {
      marginTop: 34,
      marginBottom: 42,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 0
    },
    hero_title: {
      color: '#ffffffff',
      textAlign: 'center',
      letterSpacing: 0,
      lineHeight: 43.199999999999996,
      fontSize: 36,
      fontWeight: '700',
      fontStyle: 'normal',
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    hero_title_box: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    group1: {
      width: '100%',
      backgroundColor: '#ffffffff',
      overflow: 'hidden'
    },
    group1_layout: {
      overflow: 'hidden',
      marginTop: 42,
      height: 100,
      marginBottom: 34,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 0
    },
    flex1: {
      flexDirection: 'row',
      overflow: 'hidden'
    },
    flex1_layout: {
      overflow: 'hidden',
      marginTop: 0,
      marginBottom: 0,
      minHeight: 100,
      width: 313,
      minWidth: 313,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    flex1_space: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 35
    },
    flex1_col: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 30
    },
    icon: {
      resizeMode: 'contain'
    },
    icon_layout: {
      marginTop: 35,
      height: 30,
      marginBottom: 35,
      marginLeft: 0,
      width: 30,
      minWidth: 30,
      marginRight: 0
    },
    flex1_space1: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 20.5
    },
    flex1_col1: {
      flexGrow: 0,
      flexShrink: 1,
      minWidth: 212.5
    },
    year_one_box_layout: {
      marginTop: 27,
      marginBottom: 30,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 46.5
    },
    year_one: {
      color: '#000000ff',
      textAlign: 'center',
      letterSpacing: 0,
      lineHeight: 43.199999999999996,
      fontSize: 36,
      fontWeight: '700',
      fontStyle: 'normal',
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    year_one_box: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    flex2: {
      flexDirection: 'row'
    },
    flex2_layout: {
      overflow: 'visible',
      marginTop: 34,
      marginBottom: 127,
      marginLeft: 'auto',
      width: 538,
      minWidth: 538,
      marginRight: 99
    },
    flex2_col: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 212
    },
    img_layout1: {
      marginTop: 0,
      height: 200,
      marginBottom: 0,
      marginLeft: 0,
      flexGrow: 1,
      marginRight: 12
    },
    flex2_col1: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 326
    },
    flex_layout: {
      overflow: 'visible',
      marginTop: 22,
      marginBottom: 73,
      marginLeft: 18,
      flexGrow: 1,
      marginRight: 0
    },
    flex3_row: {
      flexGrow: 0,
      flexShrink: 1
    },
    hero_title_box_layout1: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      width: 190,
      minWidth: 190
    },
    hero_title: {
      color: '#ffffffff',
      textAlign: 'center',
      letterSpacing: 0,
      lineHeight: 43.199999999999996,
      fontSize: 36,
      fontWeight: '700',
      fontStyle: 'normal',
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    hero_title_box_layout2: {
      marginTop: 19,
      marginBottom: 0,
      marginLeft: 84,
      flexGrow: 1,
      marginRight: 0
    },
    hero_title: {
      color: '#ffffffff',
      textAlign: 'center',
      letterSpacing: 0,
      lineHeight: 43.199999999999996,
      fontSize: 36,
      fontWeight: '700',
      fontStyle: 'normal',
      paddingHorizontal: 0,
      paddingVertical: 0
    }
  });