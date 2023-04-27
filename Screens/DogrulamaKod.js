
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import I18n, { t } from 'i18n-js'
import PhoneInput from 'react-native-phone-input'
import { StatusBar } from 'expo-status-bar'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginService from '../Services/LoginService'
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
const DogrulamaKod = ({ navigation, route }) => {

    const [minute, setMinute] = useState(1)
    const [second, setSecond] = useState(59)
    const [progressSecond, setProgressSecond] = useState(120)


    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    const pin5Ref = useRef(null)
    const pin6Ref = useRef(null)

    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")
    const [pin5, setPin5] = useState("")
    useEffect(() => {
        let interval = setInterval(() => {
            setProgressSecond(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                if (lastTimerCount <= 1) {
                    console.log('test')
                }
                return lastTimerCount - 1
            })
            setSecond(lastTimerCount => {
                if (lastTimerCount <= 1) {
                    setMinute(0)
                    setSecond(59)
                }
                return lastTimerCount - 1
            })
        }, 1000)
    }, []);


    const submitCode = () => {

        const newCode = pin1 + "" + pin2 + "" + pin3 + "" + pin4 + "" + pin5
        const phone = route.params?.phonenum
        console.log(phone)
        if (pin1 !== "" && pin2 !== "" && pin3 !== "" && pin4 !== "" && pin5 !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "phoneNumber": phone,
                "sms": newCode
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://ennettakip.com/api/v1/sms", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
    return (
        <ScrollView>
            <View>
                <View style={styles.topView}>
                    <Image source={require('../assets/icon1024.png')} style={{ width: 120, height: 120, resizeMode: 'contain', position: 'absolute' }} />
                </View>
                <View style={{ marginTop: 80 }}>
                    <Text style={styles.topText}>
                        İki Adımlı Doğrulama
                    </Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', width: Dimensions.get('screen').width, alignContent: 'center', alignItems: 'center', marginTop: 90 }}>
                <Image source={require('../assets/2fa.png')} style={{ width: 180, height: 150 }} />
            </View>
            <View style={{ width: Dimensions.get('screen').width - 80, marginLeft: 40, marginTop: 40 }}>
                <Text style={{ textAlign: 'center', color: '#838383', fontFamily: 'Poppins' }}>Lütfen {route.params?.phonenum.substring(0, 2)}******{route.params?.phonenum.substring(8, 10)} nolu cep telefonunuza gelen doğrulama kodunu giriniz.</Text>
            </View>
            <View style={{ width: Dimensions.get('screen').width, justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <CircularProgress
                    maxValue={120}
                    value={progressSecond}
                    valueSuffix={':' + second}
                    showProgressValue={false}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#2ecc71'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    radius={Dimensions.get('screen').width > 500 ? 100 : 60}
                    title={minute + ':' + second}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 80, marginRight: 80, marginTop: 30 }}>
                <View style={{ flex: 6 }}>
                    <TextInput
                        ref={pin1Ref}
                        style={{ borderColor: '#203A4B', borderWidth: 2, height: 30, borderRadius: 10, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(pin1) => {
                            setPin1(pin1)
                            if (pin1 !== "" && pin5 !== null) {

                                pin2Ref.current.focus()
                            }
                        }}
                    />
                </View>
                <View style={{ width: 10 }} />
                <View style={{ flex: 6 }}>
                    <TextInput
                        ref={pin2Ref}
                        style={{ borderColor: '#203A4B', borderWidth: 2, height: 30, borderRadius: 10, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(pin2) => {
                            setPin2(pin2)
                            if (pin1 !== "" && pin5 !== null) {

                                pin3Ref.current.focus()
                            }
                            else {


                                pin1Ref.current.focus()
                            }
                        }}
                    />
                </View>
                <View style={{ width: 10 }} />
                <View style={{ flex: 6 }}>
                    <TextInput
                        ref={pin3Ref}
                        style={{ borderColor: '#203A4B', borderWidth: 2, height: 30, borderRadius: 10, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(pin3) => {
                            setPin3(pin3)
                            if (pin3 !== "" && pin5 !== null) {
                                console.log(pin3)
                                pin4Ref.current.focus()
                            }
                            else {


                                pin2Ref.current.focus()
                            }
                        }}
                    />
                </View>
                <View style={{ width: 10 }} />
                <View style={{ flex: 6 }}>
                    <TextInput
                        ref={pin4Ref}
                        style={{ borderColor: '#203A4B', borderWidth: 2, height: 30, borderRadius: 10, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(pin4) => {
                            setPin4(pin4)
                            if (pin4 !== "" && pin5 !== null) {

                                pin5Ref.current.focus()
                            }
                            else {
                                pin3Ref.current.focus()
                            }
                        }}
                    />
                </View>
                <View style={{ width: 10 }} />
                <View style={{ flex: 6 }}>
                    <TextInput
                        ref={pin5Ref}
                        style={{ borderColor: '#203A4B', borderWidth: 2, height: 30, borderRadius: 10, textAlign: 'center' }}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(pin5) => {
                            setPin5(pin5)
                            if (pin5 == "") {

                                pin4Ref.current.focus()
                            }

                        }}
                    />
                </View>
                
            </View>
            <View style={{ marginTop: 40 }}>
                <Pressable style={{ width: Dimensions.get('screen').width - 160, height: 50, backgroundColor: '#FECB10', marginLeft: 80, borderTopRightRadius: 10, borderBottomLeftRadius: 10 }} onPress={() => submitCode()}>
                    <Text style={{ textAlign: 'center', marginTop: 13, fontSize: 16, color: '#FFF', fontFamily: 'Poppins' }}>Doğrula</Text>
                </Pressable>
            </View>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
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
        top: 30
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
        position: 'absolute',
        top: 0,
    },
    bottomView: {
        top: 80
    },
})
export default DogrulamaKod