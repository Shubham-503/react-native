import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cards,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards,styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cards,styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards,styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards,styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container:{
    padding:10,
    flex:1,
    flexDirection:'row'
  },
  cards:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    margin:8,
    borderRadius:4,
  },
  cardOne:{
    backgroundColor:'#ef5354'
  },
  cardTwo:{
    backgroundColor:'#50DBB4'
  },
  cardThree:{
    backgroundColor:'#5DAEFA'
  },
});
