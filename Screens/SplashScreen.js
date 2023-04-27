
import { Dimensions, ImageBackground, Text, View,StyleSheet,Image } from 'react-native'
import I18n from "i18n-js";
import { useNavigation } from "@react-navigation/native";
import {useEffect,useState,useCallback} from 'react'
const SplashScreen = () => {
    const navigation = useNavigation()
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            async function prepare() {
                await new Promise(resolve => setInterval(resolve, 1500));
                navigation.navigate('Login')
            }
            prepare();
          });

          return unsubscribe 

    }, []);
    return(
        <View style={styles.container}>
            <Image style={{width:250,height:200,resizeMode:'contain'}} source={require('../assets/icon1024.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default SplashScreen