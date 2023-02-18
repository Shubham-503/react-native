import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react'
import FlatCards from '../components/FlatCards';
import ElevatedCards from '../components/ElevatedCards';
import FancyCard from '../components/FancyCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';



export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})