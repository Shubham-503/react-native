import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }
  return (
    <View style={styles.actionCard}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Javascript Interview CheatSheet </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1662894369865/Oki6TZg3t.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            height: 300,
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={{textAlign: 'justify'}}>
            Js is unlike any traditional language, It behaves slightly
            differently than C, C++, python, or any other programming language.
            In this article, I will try to simplify some of the js advance
            topics that will help you to understand the workings of js better.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://kshubham07.hashnode.dev/javascript-interview-cheatsheet',
              );
            }}>
            <Text style={styles.openLink}>Load more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => {
              openWebsite('https://www.instagram.com/k_shubham07');
            }}>
            <Text style={styles.followMe}>Follow For More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionCard: {
   
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    borderRadius: 6,
    margin: 10,
    padding: 10,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  elevatedCard: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headerContainer: {
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 16,
  },
  bodyContainer: {
    marginVertical: 4,
    paddingHorizontal: 6,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 4,
  },
  openLink: {
    color: 'blue',
    paddingHorizontal:20,
    paddingVertical:4,
    backgroundColor:"#b3b3b3",
    borderColor:"blue",
    borderWidth:1,
    
  },
  followMe: {
    color: 'blue',
    paddingHorizontal:20,
    paddingVertical:4,
    backgroundColor:"#b3b3b3",
    borderColor:"blue",
    borderWidth:1,
  },
});
