import Constants from 'expo-constants';
import {SafeAreaView, Text, StyleSheet, StatusBar, Image, Dimensions, Switch, Platform} from 'react-native';
import {useState} from 'react'
import bulbOn from '../../assets/light/bulb-on.jpg'
import bulbOff from '../../assets/light/bulb-off.jpg'

export default function Light(){
  const [isEnable, setIsEnable] = useState(false)
  const toggleSwitch = () => {
    setIsEnable((previousState => !previousState))
  }
  const [flashMode, setFlashMode] = useState('off')
  const handleFlashMode = () => {    if (flashMode === 'on') {      setFlashMode('off')    } else if (flashMode ===     'off') {      setFlashMode('on')    } else {      setFlashMode('auto')    }  }
  return(
    <SafeAreaView style={styles.container}>
    <StatusBar />
    <Image 
    fadeDuration={0}
    source={isEnable ? bulbOn : bulbOff}
    style={styles.image}
    />
    <Switch
    trackColor={{false: "#fff", true:"#52d964"}}
    thumbColor={isEnable ? "#fff": "#ddd"}
    value={isEnable}
    style={styles.switch}
    onValueChange={toggleSwitch}
    />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
  image:{
    maxWidth: "100%",
    maxHeight: Dimensions.get("window").height - 100,
    resizeMode: "contain",
    marginBottom: 20
  },
  switch:{
    alignSelf: "center",
    transform: Platform.OS === "ios" ? [] : [{scale: 1.5}]
  }
})