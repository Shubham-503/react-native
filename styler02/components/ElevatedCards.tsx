import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.white}>🥌</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    
  },
  container: {
    padding: 10,

  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    color: 'white',
  },
  cardElevated: {
    backgroundColor: '#323456',
    elevation:6,
    shadowOffset:{
      height:1,
      width:1,
    },
    shadowColor:"green"
  },
  white:{
    color:'#f3f3f3'
  }
});
