import { StatusBar } from 'expo-status-bar';
import React, {Suspense} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyWebSite from './components/MyWebSite';
const NftList = React.lazy(() => import("./components/list.js"));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeeajlGM8121N15vmlwxgIJRg5CVS6kHU",
  authDomain: "dannysnfts.firebaseapp.com",
  projectId: "dannysnfts",
  storageBucket: "dannysnfts.appspot.com",
  messagingSenderId: "818464549321",
  appId: "1:818464549321:web:70dedaef21b23b262d2018",
  measurementId: "G-B2MD02D453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.container}>
      <MyWebSite />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
