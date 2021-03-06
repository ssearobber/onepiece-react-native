import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './search.jsx';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
      <Text style={styles.resultList}>test</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === `ios` ? 0 : Constants.statusBarHeight + 10 ,
    backgroundColor: 'powderblue',
    justifyContent: 'flex-start',
  },
  resultList: {
    flex:1,
    paddingTop: 20,
    backgroundColor: 'skyblue',
  }
});
