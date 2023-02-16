import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

const AppPro = (): JSX.Element => {
  const colorMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={colorMode ? styles.darkText : styles.whiteText}>
        Hello World!!
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  whiteText: {
    color: 'red',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
