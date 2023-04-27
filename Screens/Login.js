
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, Image, ScrollView,Keyboard} from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import I18n, { t } from 'i18n-js'
import PhoneInput from 'react-native-phone-input'
import { StatusBar } from 'expo-status-bar'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginService from '../Services/LoginService'
const Login = () => {
    const navigation = useNavigation()
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [phoneborderColor, setphoneborderColor] = useState('#0CBDDE')
    const [passwordborderColor, setpasswordborderColor] = useState('#0CBDDE')
    const [securityborderColor, setsecurityborderColor] = useState('#0CBDDE')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [security, setSecurity] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordIndex, setShowPasswordIndex] = useState(0)
    const [passwordImage, setPasswordImage] = useState(require('../assets/eyeNotOpen.png'))
    const [captchaWord, setCaptchaWord] = useState('')
    const [topTextDisplay, setTopTextDisplay] = useState('flex')
    const [showAlert, setShowAlert] = useState(false)
    const onLogin = () => {
        navigation.navigate('BottomTab')
        console.log(phone)
        if (phone === null || phone === undefined || phone === '') {
            setphoneborderColor('#FF3232')
        }
        if (password === null || password === undefined || password === '') {
            setpasswordborderColor('#FF3232')
        }
        if (security === null || security === undefined || security === '') {
            setsecurityborderColor('#FF3232')
        }

    }

    const showHidePassword = () => {
        setShowPasswordIndex(showPasswordIndex + 1)
    }
    const reRollCaptcha = () => {
        let firstWord = Math.floor(Math.random() * 10).toString()
        let secondWord = alphabet[Math.floor(Math.random() * alphabet.length)]
        let thirdWord = alphabet[Math.floor(Math.random() * alphabet.length)]
        let fourthWord = Math.floor(Math.random() * 10).toString()
        let fifthWord = alphabet[Math.floor(Math.random() * alphabet.length)]
        setCaptchaWord(firstWord + secondWord + thirdWord + fourthWord + fifthWord)
    }
    useEffect(() => {
        reRollCaptcha()

    }, [])

    useEffect(() => {
        if (showPassword === true) {
            setShowPassword(false)
            setPasswordImage(require('../assets/eyeOpen.png'))
        }
        else {
            setShowPassword(true)
            setPasswordImage(require('../assets/eyeNotOpen.png'))
        }

    }, [showPasswordIndex])

    const postLoginData = () => {

        setShowAlert(false)
       // if(security === captchaWord && password != ''){
        const newPhone = phone.substring(4, 7) + phone.substring(8, 11) + phone.substring(12, 14) + phone.substring(15, 17)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": "5468956499",
            "password": "kerem"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://ennettakip.com/api/v1/login", requestOptions)
            .then(response => response.json())
            .then((responseData) =>{if (responseData.access_token != undefined) {
                AsyncStorage.setItem('token',responseData.access_token)
                navigation.navigate('NotListesi')
            } else {
                setphoneborderColor('#FF3232')
                setpasswordborderColor('#FF3232')
                setsecurityborderColor('#FF3232')
                setShowAlert(true)
            }})
            .catch(error => {console.log('error', error)});
       // }
       // else{
            setphoneborderColor('#FF3232')
            setpasswordborderColor('#FF3232')
            setsecurityborderColor('#FF3232')
            setShowAlert(true)
       // }
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.topView}>
                <Image source={require('../assets/icon1024.png')} style={{ width: Dimensions.get('screen').width > 500 ? 240 : 120, height: Dimensions.get('screen').width > 500 ? 240 : 120, resizeMode: 'contain', position: 'absolute' }} />
            </View>
            <View style={{ top: Dimensions.get('screen').width > 500 ? 20 :0,paddingBottom:30 }}>
                <Text style={styles.topText}>
                    {I18n.t('girisEkrani')}
                </Text>
                <Text style={styles.topText2}>
                    Ennet Takip programına güvenli giriş yapabilmeniz için bu adımı tamamlayınız.
                </Text>
            </View>
            <View>
                <Text style={styles.title}>{I18n.t('telefonNumarasi')}</Text>
                <PhoneInput
                    style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 18, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 50, height: 50, borderColor: phoneborderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                    initialCountry={'tr'}
                    initialValue="+905468956499"
                    confirmText='Onayla'
                    confirmTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                    cancelText='Iptal'
                    //value={phone}
                    value='+905468956499'
                    cancelTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                    textStyle={{ paddingLeft: 20 }}
                    allowZeroAfterCountryCode={false}
                    textProps={{ maxLength: 17, fontFamily: 'Poppins', color: '#525252' }}
                    autoFormat={true}
                    onChangePhoneNumber={setPhone}
                    maxLength={10}
                />
            </View>
            <View style={{ top: 20 }}>
                <Text style={styles.title}>{I18n.t('sifre')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 18, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 50, height: 50, borderColor: passwordborderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                        //value={password}
                        secureTextEntry={showPassword}
                        value='kerem'
                        maxLength={40}
                        onChangeText={setPassword}
                    />
                    <Pressable onPress={() => showHidePassword()}>
                        <Image source={passwordImage} style={{ alignItems: 'center', position: 'absolute', right: 10, top: 9, width: 30, height: 30, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            </View>
            <View style={{ top: 40 }}>
                <Text style={styles.title}>{I18n.t('güvenlikKodu')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 18, paddingLeft: 20, paddingRight: 10, textAlign: 'left', width: Dimensions.get('screen').width / 2, height: 50, borderColor: securityborderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                        value={captchaWord}
                        //value={security}
                        onChangeText={setSecurity}
                        maxLength={10}
                    />
                    <View
                        style={{ width: Dimensions.get('screen').width / 2 - 50, backgroundColor: '#E9E9E9', height: 50, borderRadius: 10, left: 5, flexDirection: 'row', justifyContent: 'center' }}
                    >
                        <Text style={{ fontSize: 24, textAlign: 'center', top: 7, left: -10, fontFamily: 'Poppins-SemiBold', color: '#7D7D7D' }}>{captchaWord}</Text>
                        <Pressable style={{ position: 'absolute', right: 10, top: 13, backgroundColor: 'transparent' }} onPress={() => reRollCaptcha()}>
                            <Image style={{ width: 20, height: 20 }} source={require('../assets/reRoll.png')} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ top: 20, flexDirection: 'row' }}>
                    <Pressable style={{ flexDirection: 'row' }} onPress={() => alert('test')}>
                        <Image source={require('../assets/fish.png')} style={{ width: Dimensions.get('screen').width > 500 ? 40 : 20, height: Dimensions.get('screen').width > 500 ? 30 : 20, top: 5, marginRight: 5, resizeMode: 'contain' }} />
                        <Text style={{ marginTop: 10, fontFamily: 'Poppins', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 20 : 10 }}>Sifremi Unuttum</Text>
                    </Pressable>

                    <Pressable style={{ alignItems: 'center', position: 'absolute', right: 0, flexDirection: 'row' }} onPress={() => navigation.navigate('Register')}>
                        <Image source={require('../assets/register.png')} style={{ width: Dimensions.get('screen').width > 500 ? 40 : 20, height: Dimensions.get('screen').width > 500 ? 30 : 20, top: 3, resizeMode: 'contain', marginRight: 5 }} />
                        <Text style={{ marginTop: 10, fontFamily: 'Poppins', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 20 : 10 }}>Müşteri Olmak İstiyorum</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.bottomView}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={styles.loginButtonCircle} onPress={() => postLoginData()}>
                        <Text style={styles.buttonText} adjustsFontSizeToFit={true}>{I18n.t('girisYap')}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ top: 90, alignContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/ssl.png')} style={{ width: Dimensions.get('screen').width > 500 ? 250 : 150, height: Dimensions.get('screen').width > 500 ? 250 : 150, resizeMode: 'contain' }} />
                <Text style={{ color: '#838383', fontFamily: 'Poppins', top: -10, fontSize: Dimensions.get('screen').width > 500 ? 20 : 12 }}>Let's Encrypt Güvenlik Sertifikası ile Korunmaktadır</Text>
            </View>
            <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Tüm Bilgilerin Doğru Olduğundan Emin Olup Tekrar Deneyin."
          messageStyle={{color:'#A5A5A5',fontSize:14,fontFamily:'Poppins '}}
          closeOnTouchOutside={true}
          contentContainerStyle={{borderRadius:10,borderColor:'#FF3232',borderLeftWidth:2,borderRightWidth:2,borderTopWidth:2,borderBottomWidth:2,width:Dimensions.get('screen').width - 50}}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Tamam"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false) 
          }}
        />
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    title: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('screen').width > 500 ? 26 : 14,
        color: '#525252'
    },
    loginButtonCircle: {
        position: "relative",
        top: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#67C5B5",
        width: Dimensions.get('screen').width - 50,
        height: Dimensions.get('screen').width > 500 ? 70 : 50,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        textAlign: 'center'
    },
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        textAlign: 'center',
        top: 18
    },
    topText2: {
        fontFamily: 'Poppins',
        color: '#838383',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 14,
        width: Dimensions.get('screen').width - 30,
        textAlign: 'center',
        marginTop: 30
    },
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left: 5
    },
    topView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
    },
    bottomView: {
        top: 80
    },
})
export default Login