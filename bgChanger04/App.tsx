import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');
  const [circleColor, setCircleColor] = useState('red');
  const [squareColor, setSquareColor] = useState('yellow');

  const generateColor = () => {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    let color2 = '#';
    let color3 = '#';
    for (let i = 0; i < 6; i++) {
      color += hexChars.charAt(Math.floor(Math.random() * 16));
      color2 += hexChars.charAt(Math.floor(Math.random() * 16));
      color3 += hexChars.charAt(Math.floor(Math.random() * 16));
    }
    setRandomBackgroundColor(color);
    setCircleColor(color2);
    setSquareColor(color3);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor} />
      {/* <View style={[styles.container, backgroundColor: randomBackgroundColor]} > */}
      <View
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <View style={[styles.circle, {backgroundColor: circleColor}]} />
        <View style={{width: 100, height: 100, backgroundColor: squareColor}} />
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default App;
