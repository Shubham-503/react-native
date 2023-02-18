import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactDetails from '../components/ContactDetails'

export default function ContactsScreen({navigation,route}) {
  return (
    <View>
      <ContactDetails route={route} navigation={navigation} />
      <Text>hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({})