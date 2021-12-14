import React, { useState, useRef } from 'react';
import { 
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar,
  TouchableOpacity, 
  Image,
  Dimensions,
  Linking } from 'react-native';
import { SocialIcon } from 'react-social-icons';
const { width } = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  seperatorStyle: {
    height: 20,
    width: "100%",
    backgroundColor: "#00000000",
  },
  renderItemStyle: 
  {
    borderWidth: 2,
    backgroundColor: "white",
    display: "flex",
    borderRadius: 5,
    borderColor: "white",
    elevation: 3,
    alignItems: "center",
    alignSelf: "center",
  },
  imageBackground: {
    width:  200, 
    height: 200,
    aspectRatio: 1 * 1.4,
    borderRadius: 100,
    alignSelf: "center"
  },
  imageSkully: {
    width:  150, 
    height: 150,
    aspectRatio: 1 * 1.4,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 80,
    marginBottom: -20
  },
  lowerContainer: {
    flex: 1,
    margin: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    paddingTop: 10,
  },
  contentText: {
    paddingTop:10, 
    paddingLeft:20, 
    paddingRight:20, 
    justifyContent: "center", 
    textAlignVertical: 'top',
    color: 'white', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontWeight: 'bold',
    fontSize: 20,
    width: 300,
    alignSelf: 'center'
  },
  carousel: {
    flex: 1,
    backgroundColor: "#00000000",
  },
  socials: {
    width:  50, 
    height: 50,
    aspectRatio: 1 * 1.4,
    borderRadius: 100,
    alignSelf: "center",
    
  }
});
function NftList() {
    const [nftData, setData] = useState([
        {
            uri: 'https://lh3.googleusercontent.com/-UbH1Se9ODvpUrejFRzQXSbJ--vZl7TeHUc1dfDoyMu15GNWyoYWq7CnKje5SJZG8GcPsJqzdvpftFBBks1OXCe6at79lwI7yuBhNw=w600',
            title: 'Chubbies #9580',
            content: "My first Chubbies NFT and the second NFT I ever bought. It holds a special place in my heart.",
            openSeaLink: "https://opensea.io/assets/0x1db61fc42a843bad4d91a2d788789ea4055b8613/9580",
            discord: "https://discord.com/invite/epgNmkG3ZT",
            twitter: "https://twitter.com/ChubbiesNFT",
        },
        {
          uri: 'https://lh3.googleusercontent.com/BtyLFEcx7wsDoNxXoFBOY63h7vwiBUV2c8SJ7ID6bqklCjIovEWTHzcYnW6AuXY4htp8IWxj7clWacpLU9RO_uQfplz5I8s_tJMmQSQ=w202',
          title: 'BittyBot #10547',
          content: "BittyBots are awesome and some of the cutest art of robots I have ever seen!",
          openSeaLink: "https://opensea.io/assets/0x75448243a3ccde04368d2c19a01a710602e5f658/10547",
          discord: "https://discord.com/invite/epgNmkG3ZT",
          twitter: "https://twitter.com/BittyBotsNFT",
       }, 
       {
        uri: 'https://lh3.googleusercontent.com/XFZTIIhr6tryRtqpmH_mJWUiiDVcVjFseSaptEgSRk4qGHWGWXnfnA1cLviFwX3H1PMg_qYwXWLJ2w8fSdwoYs17HLBI9IbGPwSV=w202',
        title: 'Gator #2213',
        content: "I found Gator World out of pure luck and it had its ups and downs but I love this little guy.",
        openSeaLink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/3300999026526257103984314199203150625053400398412760114155755424968588918785",
        discord: "https://discord.gg/FahvugjZSA",
        twitter: "https://twitter.com/GatorWorldNFT",
      }, 
      {
        uri: 'https://lh3.googleusercontent.com/AVGftgTL3PfRCoyCuCXIeT7TnaTXpin9WHC4bcRPIU-ir6MMXPNKqlLPJcw0t03z87yjBx8HQd7gTwKcMovio_dMPzm7UYOde-Xa=w202',
        title: 'Froggie #662',
        content: "I really believe in Froggies and it has some of the most responsive and cool devs I have seen in a project.",
        openSeaLink: "https://opensea.io/assets/0x64ed7fc387bfeee39898b553fe0e199a35fec5d6/662",
        discord: "https://discord.com/invite/froggies",
        twitter: "https://twitter.com/froggiesnft",
      }, 
      {
        uri: 'https://lh3.googleusercontent.com/FAPWQmaAsajo0o3bTPwlBQFaMncWbJ0dJD1GBYd5Rnyg6f-9VGYcnQpGIO7S6yuiCg4Biy_ZHWMEb2HVdpbtd2vE_wquKDLuGzu6=w202',
        title: 'Mekabae #4156',
        content: "I found Mekabaes through a conversation on the Gator World discord and it was a free mint! It looks really cool and I'll hodl forever.",
        openSeaLink: "https://opensea.io/assets/0xede5b530498f8810537d9b64c3f857d06ac09585/4156",
        discord: "https://discord.com/invite/onedaybae",
        twitter: "https://twitter.com/1daybae",
      }, 
      {
        uri: 'https://lh3.googleusercontent.com/3_lV7skT2i4YJRWGgbpxlVYqOyDDtaaJKF2oBlGLOZ2i6Y5Y5wc-pBX2Q46jre5x5gRebHVxO2sizIA0IkSCfoRLBG2Y8lfvYPQjqQ=w202',
        title: 'Cool Dog #4662',
        content: "I found Cool Dogs while sailing OpenSea and I really liked the art so I aped in and got this cute little guy!",
        openSeaLink: "https://opensea.io/assets/0x56681458e00cafe1206313d2d033946f458fdefd/4662",
        discord: "https://discord.com/invite/9nxq4rvbpH",
        twitter: "https://twitter.com/Cool_Dogs_",
      },
    ]);
  const [lastItem, setLast] = useState(false);
  const carouselRef = useRef(null);
  const seperator = () => {
    return (
      <View
        style={styles.seperatorStyle}
      />
    );
  };
  const renderItem = ({ item, index }) => {
    const { uri, title, content, openSeaLink, discord, twitter } = item;
    let arrow;
   
    if (index != nftData.length - 1) {
      arrow =  <Image source={require('../assets/Group 1.png')} style={styles.imageSkully} resizeMode = 'cover'/>;
    }
    return (
      <View
        style={(styles.seperatorStyle, index % 2 == 0 ? { marginRight: 3 } : { marginLeft: 3 })}
      >
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.item}
          onPress={() => Linking.openURL(openSeaLink)}>
          <Image source={{ uri: uri }} style={styles.imageBackground} resizeMode = 'cover'/>
          </TouchableOpacity>
          <View style={styles.lowerContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text
              style={styles.contentText}
              overflow
            >
              {content}
            </Text>
            <View style={ {flex: 1, flexDirection: "row", alignSelf: "center", marginTop: 30}}> 
            <TouchableOpacity activeOpacity={0.2} onPress={() => Linking.openURL(twitter)}>
            <Image source={require('../assets/twitter.png')} style={styles.socials} resizeMode = 'cover'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.2} onPress={() => Linking.openURL(discord)}>
            <Image source={require('../assets/discord-icon-logotype.png')} style={styles.socials} resizeMode = 'cover'/>
            </TouchableOpacity>
            </View>
          </View>
        
        {arrow}
      </View>
      
    );
  };
  return (
    <FlatList
    style={styles.carousel}
    data={nftData}
    ItemSeparatorComponent={seperator}
    numColumns={1}
    renderItem={renderItem}
    itemWidth={width >= 1024 ? width * 0.33 : 250}
    inActiveOpacity={0.5}
    directionalLockEnabled={true}
    containerWidth={width - 2}
    ref={carouselRef}
    showsVerticalScrollIndicator={false}
  />
  );
}


export default NftList;
