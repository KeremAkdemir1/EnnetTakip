import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Dimensions,SafeAreaView,LogBox } from 'react-native';
import {useState,useEffect} from 'react'
import * as Localization from 'expo-localization';
import { tr } from './localizations/Translations';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from 'i18n-js';
import { LinearGradient } from 'expo-linear-gradient';
import Router from './ScreensRoute/Route';
export default function App() {
  let [locale ,setLocale] = useState(Localization.locale)
  I18n.fallbacks = true;
  I18n.translations = { tr };
  I18n.locale = locale
  let [fontsLoaded] = useFonts({
    'Poppins': require("./assets/font/Poppins-Regular.ttf"),
    'Poppins-Light': require("./assets/font/Poppins-Light.ttf"),
    'Poppins-SemiBold': require("./assets/font/Poppins-SemiBold.ttf"),
    'Poppins-Bold': require("./assets/font/Poppins-Bold.ttf"),
  })
  useEffect(() => {
    LogBox.ignoreLogs(['fontFamily "Poppins" is not a system font and has not been loaded through Font.loadAsync.']);
    LogBox.ignoreLogs(['fontFamily "Poppins-Light" is not a system font and has not been loaded through Font.loadAsync.']);
    LogBox.ignoreLogs(['fontFamily "Poppins-SemiBold" is not a system font and has not been loaded through Font.loadAsync.']);
    LogBox.ignoreLogs(['fontFamily "Poppins-Bold" is not a system font and has not been loaded through Font.loadAsync.']);
    LogBox.ignoreAllLogs()
  }, [])
  

  const slides = [
    {
      key: 'one',
      title: I18n.t("intro1Title"),
      text: I18n.t("intro1Desc"),
      backgroundColor: 'black',
      image: require('./assets/intro1.png'),
      linearFirst:"#bde7ff",
      linearSecond: "#a7dfff"
    },
    {
      key: 'two',
      title: I18n.t("intro2Title"),
      text: I18n.t("intro2Desc"),
      backgroundColor: 'black',
      image: require('./assets/intro2.png'),
      linearFirst:"#bde7ff",
      linearSecond: "#a7dfff"
    },
    {
      key: 'three',
      title: I18n.t("intro3Title"),
      text: I18n.t("intro3Desc"),
      backgroundColor: 'black',
      image: require('./assets/intro3.png'),
      linearFirst:"#bde7ff",
      linearSecond: "#a7dfff"
    },
    {
      key: 'four',
      title: I18n.t("intro4Title"),
      text: I18n.t("intro4Desc"),
      backgroundColor: 'black',
      image: require('./assets/intro4.png'),
      linearFirst:"#bde7ff",
      linearSecond: "#a7dfff"
    },
    {
      key: 'five',
      title: I18n.t("intro5Title"),
      text: I18n.t("intro5Desc"),
      backgroundColor: 'black',
      image: require('./assets/intro5.png'),
      linearFirst:"#bde7ff",
      linearSecond: "#a7dfff"
    }
  ];
  const slideChange = () => {
    var index = colorIndex
    index = index + 1
    setColorIndex(index)
  }
   const [state,setState] = useState({
        showRealApp: true
      })
      const renderItem = ({ item }) => {
        return (
          
            <View style={styles.slide}>
               <Image style={{width:Dimensions.get('window').width - 60,resizeMode:'contain',height:Dimensions.get('screen').height / 2 - 70,top:-60}} source={item.image} />
               <Text style={styles.titleText}>{item.title}</Text>
               <Text style={styles.descriptionText}>{item.text}</Text>
            </View>
         
        );
      }
     const renderNextButton = () => {
            return (
          <View style={[styles.buttonCircle]}>
             <Image style={{width:20,height:20,resizeMode:'contain',top:15}} source={require('./assets/right.png')}/>
          </View>
        );
      };
      const renderDoneButton = () => {
        return (
          <View style={[styles.doneButtonCircle]}>
            <Text style={styles.nextText}>{I18n.t('bitti')}</Text>
          </View>
        );
      };
      const renderSkipButton = () => {
        return (
          <View style={[styles.skipButtonCircle]}>
            <Image style={{width:20,height:20,resizeMode:'contain',top:15}} source={require('./assets/left.png')}/>
          </View>
        );
      };
      
     const onDone = () => {
      AsyncStorage.setItem('launch','true')
      setState({ showRealApp: true });
      }
      const RenderIntro = () => {
        if (state.showRealApp) {

            return(<SafeAreaView style={{flex:1}}><Router/></SafeAreaView>);
          } else {
            return <AppIntroSlider onSlide activeDotStyle={{backgroundColor:'#F28243'}} render renderItem={renderItem} data={slides} onDone={onDone} renderNextButton={renderNextButton} renderPrevButton={renderSkipButton} showPrevButton={true} renderDoneButton={renderDoneButton} />;
          }
      }
  return (
    <RenderIntro/>
  );
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  titleText: {
    fontSize:Dimensions.get('window').height < 750 ? 20 : 23,
    top:-20,
    width:Dimensions.get('screen').width - 30,
    textAlign:'center',
    color:'#525252',
    fontWeight:'bold',
    fontFamily:'Poppins-SemiBold',
    paddingLeft:20,
    paddingRight:20
  },
  descriptionText: {
    fontSize:Dimensions.get('window').height < 750 ? 17 : 20,
    width:Dimensions.get('screen').width - 30,
    textAlign:'center',
    color:'#888787',
    fontFamily:'Poppins-Light',
  },
    buttonCircle: {
      position: "relative",
      top: -10,
      right: Dimensions.get('screen').width / 2 - 140,
      backgroundColor:'#F28243',
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      width: 50,
      height: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      alignContent:'center',
      alignItems:'center'
    },
    doneButtonCircle: {
      position: "relative",
      top: -10,
      right: Dimensions.get('screen').width / 2 - 180,
      borderTopRightRadius:20,
      backgroundColor:'#F28243',
      borderBottomLeftRadius:20,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      width: 100,
      
      height: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    skipButtonCircle: {
      position: "relative",
      top: -10,
      left: Dimensions.get('screen').width / 2 - 135,
      borderTopRightRadius:20,
      backgroundColor:'#F28243',
      borderBottomLeftRadius:20,
      backgroundColor:'#F3F3F3',
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      width: 50,
      height: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      alignContent:'center',
      alignItems:'center'
  },
    nextText: {
      fontSize:22,
      top:13,
      textAlign:'center',
      fontFamily:'Poppins',
      color:'#fff'
    }
});
  