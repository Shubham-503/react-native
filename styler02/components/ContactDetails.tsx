import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactDetails({route, navigation}) {
  const {uid, name, status, imageUrl} = route.params
  return (
    <View style={[styles.card, styles.elevatedCard]}>
      <Text style={styles.white}>{uid}</Text>
      <Text style={styles.white} >{name}</Text>
      <Text style={styles.white} >{status}</Text>
      <Text style={styles.white} >{imageUrl}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    margin: 8,
    padding:10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 4,
  },
  elevatedCard: {
    backgroundColor: '#323456',
    elevation:6,
    shadowOffset:{
      height:1,
      width:1,
    },
    shadowColor:"black"
  },
  white:{
    color:'#fff'
  }
})