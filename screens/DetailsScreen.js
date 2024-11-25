import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  function handleUrl() {
    console.log('hiii');
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to the Details Screen!</Text>
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
