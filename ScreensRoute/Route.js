import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, ImageBackground } from "@react-navigation/native-stack";
import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';
import AdresEkle from '../Screens/AdresEkle';
import AdresListesi from '../Screens/AdresListesi';
import BekleyenSiparisler from '../Screens/BekleyenSiparisler';
import BorcListesi from '../Screens/BorcListesi';
import CalisanAyar from '../Screens/CalisanAyar';
import CariIslem from '../Screens/CariIslem';
import DogrulamaKod from '../Screens/DogrulamaKod';
import EskiSiparisler from '../Screens/EskiSiparisler';
import FirmaCagrıGecmisi from '../Screens/FirmaCagrıGecmisi';
import GiderEkle from '../Screens/GiderEkle';
import GiderListele from '../Screens/GiderListele';
import HazirListesi from '../Screens/HazirListesi';
import Home from '../Screens/Home';
import IptalEdilenler from '../Screens/IptalEdilenler';
import KvkkMetni from '../Screens/KvkkMetni';
import Login from '../Screens/Login'
import MusteriCagrıGecmisi from '../Screens/MusteriCagrıGecmisi';
import MusteriEkle from '../Screens/MusteriEkle';
import MusteriEkle2 from '../Screens/MusteriEkle2';
import MusteriEkle21 from '../Screens/MusteriEkle21';
import MusteriGrup from '../Screens/MusteriGrup';
import MusterilerList from '../Screens/MusterilerList';
import MusteriProfil from '../Screens/MusteriProfil';
import MusteriIslemleri from '../Screens/MüsteriIslemleri';
import NotListesi from '../Screens/NotListesi';
import OzetKasaCiro from '../Screens/OzetKasaCiro';
import Randevular from '../Screens/Randevular';
import Register from '../Screens/Register';
import SiparisEkle from '../Screens/SiparisEkle';
import SipariseUrunEkle from '../Screens/SipariseUrunEkle';
import SistemAyarlari from '../Screens/SistemAyarlari';
import SmsGecmisi from '../Screens/SmsGecmisi';
import SmsSablon from '../Screens/SmsSablon';
import SmsWhatsappIzin from '../Screens/SmsWhatsappIzin';
import SplashScreen from '../Screens/SplashScreen'
import TelefonEkle from '../Screens/TelefonEkle';
import TelefonListesi from '../Screens/TelefonListesi';
import TeslimAlincak from '../Screens/TeslimAlincak';
import TeslimEdilcekler from '../Screens/TeslimEdilcekler';
import TeslimEdilenler from '../Screens/TeslimEdilenler';
import TumOperasyonlar from '../Screens/TumOperasyonlar';
import UrunListesi from '../Screens/UrunListesi';
import UrunListesi1 from '../Screens/UrunListesi1';
import UrunListesi2 from '../Screens/UrunListesi2';
import UrunListesi3 from '../Screens/UrunListesi3';
import UrunOlcum from '../Screens/UrunOlcum';
import VersiyonGelistirme from '../Screens/VersiyonGelistirme';
import WhatsappSablon from '../Screens/WhatsappSablon';
import YikamadaOlanlar from '../Screens/YikamadaOlanlar';
import Yonetici from '../Screens/Yonetici';
import NotEkle from '../Screens/NotEkle';
const { Screen, Navigator } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Router = () => {
  function BottomTab() {
    return (
      <Navigator screenOptions={({ route, navigation }) => {
        return {
          detachInactiveScreens: true,
          headerShown: false,
          tabBarShowlabel: false,
          tabBarLabelStyle: {
            top: Dimensions.get('screen').width > 500 ? 0 : -5,
            marginLeft:Dimensions.get('screen').width > 500 ? 25 : 0,
            fontFamily: 'Poppins',
            color: navigation.isFocused() ? '#FECB10' : '#FFFFFF',
            fontSize:Dimensions.get('screen').width > 500 ? 18 : 12,
            
            
          },
          tabBarStyle: {
            bottom: 25,
            width: Dimensions.get('screen').width - 30,
            left: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 65,
            position: 'absolute',
            backgroundColor: 'transparent',
            tabBarVisible: false
          },
          tabBarBackground: () => (
            <View style={{ height: 70, borderRadius: 30, backgroundColor: '#203A4B' }} />
          )
        };
      }}>
        <Screen name='Ana Sayfa' component={Home} options={{
          
          tabBarIcon: ({ focused }) => <Image style={focused ? styles.homeFocusedIcon : styles.icon} source={focused ? require('../assets/homeFocus.png') : require('../assets/home.png')} />
        }} />
        <Screen name='Müşteriler' component={MusterilerList} options={{
          
          tabBarIcon: ({ focused }) => <Image style={focused ? styles.homeFocusedIcon : styles.icon} source={focused ? require('../assets/musteriFocused.png') : require('../assets/musteri.png')} />
        }} />
        <Screen name='Yönetici' component={Yonetici} options={{
          
          tabBarIcon: ({ focused }) => <Image style={focused ? styles.homeFocusedIcon : styles.icon} source={focused ? require('../assets/yoneticiFocused.png') : require('../assets/yonetici.png')} />
        }} />
        <Screen name='Destek' component={Home} options={{
          
          tabBarIcon: ({ focused }) => <Image style={focused ? styles.homeFocusedIcon : styles.icon} source={focused ? require('../assets/destekFocused.png') : require('../assets/destek.png')} />
        }} />
      </Navigator>
    );
  }

  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={{ detachInactiveScreens: true, tabBarVisible: true }} initialRouteName='SplashScreen'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusteriProfil"
          component={MusteriProfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="Musteriler"
          component={MusterilerList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EskiSiparisler"
          component={EskiSiparisler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KvkkMetni"
          component={KvkkMetni}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeslimAlincak"
          component={TeslimAlincak}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="MusteriGrup"
          component={MusteriGrup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BekleyenSiparisler"
          component={BekleyenSiparisler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HazirListesi"
          component={HazirListesi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IptalEdilenler"
          component={IptalEdilenler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Randevular"
          component={Randevular}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeslimEdilcekler"
          component={TeslimEdilcekler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeslimEdilenler"
          component={TeslimEdilenler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TumOperasyonlar"
          component={TumOperasyonlar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YikamadaOlanlar"
          component={YikamadaOlanlar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusteriCagriGecmisi"
          component={MusteriCagrıGecmisi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GiderEkle"
          component={GiderEkle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdresListesi"
          component={AdresListesi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SiparisEkle"
          component={SiparisEkle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdresEkle"
          component={AdresEkle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelefonListesi"
          component={TelefonListesi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelefonEkle"
          component={TelefonEkle}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MusteriEkle"
          component={MusteriEkle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusteriEkle2"
          component={MusteriEkle2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SmsSablon"
          component={SmsSablon}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="MusteriEkle21"
          component={MusteriEkle21}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SipariseUrunEkle"
          component={SipariseUrunEkle}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="WhatsappSablon"
          component={WhatsappSablon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UrunListesi"
          component={UrunListesi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UrunListesi1"
          component={UrunListesi1}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UrunListesi2"
          component={UrunListesi2}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UrunListesi3"
          component={UrunListesi3}
          options={{ headerShown: false }}
        />
                 <Stack.Screen
          name="GiderListele"
          component={GiderListele}
          options={{ headerShown: false }}
        />
                         <Stack.Screen
          name="FirmaCagriGecmisi"
          component={FirmaCagrıGecmisi}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="CalisanAyar"
          component={CalisanAyar}
          options={{ headerShown: false }}
        />
                        <Stack.Screen
          name="UrunOlcum"
          component={UrunOlcum}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="Yonetici"
          component={Yonetici}
          options={{ headerShown: false }}
        />
                        <Stack.Screen
          name="SmsGecmisi"
          component={SmsGecmisi}
          options={{ headerShown: false }}
        />
                                <Stack.Screen
          name="SmsWhatsappIzin"
          component={SmsWhatsappIzin}
          options={{ headerShown: false }}
        />
                                        <Stack.Screen
          name="MusteriIslemleri"
          component={MusteriIslemleri}
          options={{ headerShown: false }}
        />
                                                <Stack.Screen
          name="OzetKasaCiro"
          component={OzetKasaCiro}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="SistemAyarlari"
          component={SistemAyarlari}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VersiyonGelistirme"
          component={VersiyonGelistirme}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="CariIslem"
          component={CariIslem}
          options={{ headerShown: false }}
        />
                        <Stack.Screen
          name="NotListesi"
          component={NotListesi}
          options={{ headerShown: false }}
        />
                                <Stack.Screen
          name="BorcListesi"
          component={BorcListesi}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="DogrulamaKod"
          component={DogrulamaKod}
          options={{ headerShown: false }}
        />
                        <Stack.Screen
          name="NotEkle"
          component={NotEkle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
const styles = StyleSheet.create({
  homeFocusedIcon: {
    width: Dimensions.get('screen').width > 500 ? 50 : 30,
    height: Dimensions.get('screen').width > 500 ? 50 : 30,
    resizeMode: 'contain'
  },
  icon: {
    width: Dimensions.get('screen').width > 500 ? 50 : 30,
    height: Dimensions.get('screen').width > 500 ? 50 : 30,
    resizeMode: 'contain'
  }
});
export default Router
