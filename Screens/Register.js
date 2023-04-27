
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, ScrollView, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import PhoneInput from 'react-native-phone-input'
import AwesomeAlert from 'react-native-awesome-alerts';
import { SelectList } from 'react-native-dropdown-select-list'
import I18n from 'i18n-js';
const Register = () => {
    const navigation = useNavigation()
    const [phoneborderColor, setphoneborderColor] = useState('#0CBDDE')
    const [nameBorderColor, setNameBorderColor] = useState('#0CBDDE')
    const [firmaAdiBorderColor, setFirmaAdiBorderColor] = useState('#0CBDDE')
    const [ilBorderColor, setIlBorderColor] = useState('#0CBDDE')
    const [ilceBorderColor, setIlceBorderColor] = useState('#0CBDDE')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [firmaAdi, setFirmaAdi] = useState('')
    const [status, setStatus] = useState(undefined)
    const [il, setIl] = useState('')
    const [ilce, setIlce] = useState('')
    const [ilData, setIlData] = useState([])
    const [oldIlData, setOldIlData] = useState([])
    const [oldIlceData, setOldIlceData] = useState([])
    const [ilceData, setIlceData] = useState([])
    const [selectedIl,setSelectedIl] = useState(0)
    const [checked, setChecked] = useState(false);
    const [showAlert, setShowAlert] = useState(false)
    const [showAlert2, setShowAlert2] = useState(false)
    const onLogin = () => {
        if (phone === null || phone === undefined || phone === '') {

        }
        if (password === null || password === undefined || password === '') {
            setpasswordborderColor('#FF3232')
        }
        if (security === null || security === undefined || security === '') {
            setsecurityborderColor('#FF3232')
        }

    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('Kvkk').then((val) => {
                if (val === null) {
                    console.log('null')
                    setChecked('false');
                }
                if (val === 'false') {
                    console.log('false')
                    setChecked(false)
                }
                if (val === 'true') {
                    console.log('true')
                    setChecked(true);
                }
            });
            return unsubscribe
        })
    }, [navigation])


    useEffect(() => {
        
        fetch("https://ennettakip.com/api/v1/address/city")
            .then(response => response.json())
            .then(result => setOldIlData(result))
            .catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        oldIlData.forEach((value) => {
            ilData.push({ key: value.id, value: value.ilAdi })
        });

    }, [oldIlData])


    const onSelectIl = () => {
          fetch("https://ennettakip.com/api/v1/address/district/" + selectedIl)
            .then(response => response.json())
            .then(result => setOldIlceData(result))
            .catch(error => console.log('error', error));
           ilceData.length = 0
    }

    useEffect(() => {
        
        oldIlceData.forEach((value) => {
            ilceData.push({ key: value.id, value: value.ilceAdi })
        });

    }, [oldIlceData])

    const register = () => {
        console.log(phone.substring(1,3))
        setShowAlert(false)
        setShowAlert2(false)
        if (name != '' && phone != '' && firmaAdi != '' &&  ilce != '') {
            if (checked === true) {

                const newPhone = phone.substring(4, 7) + phone.substring(8, 11) + phone.substring(12, 14) + phone.substring(15, 17)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const countryCode = phone.substring(1,3)
                var raw = JSON.stringify({
                    "name": name,
                    "phone": newPhone,
                    "email": null,
                    "countryCode": countryCode,
                    "businessName": firmaAdi,
                    "districtId": ilce,
                    "examined": false,
                    "communicated": false,
                    "becomeClient": false,
                    "note": null
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://ennettakip.com/api/v1/register/create", requestOptions)
                    .then((response) => {console.log(response.status); navigation.navigate({name:"DogrulamaKod",params:{phonenum:newPhone}})})
            }
            else {
                setphoneborderColor('#FF3232')
                setFirmaAdiBorderColor('#FF3232')
                setIlBorderColor('#FF3232')
                setIlceBorderColor('#FF3232')
                setNameBorderColor('#FF3232')
                setShowAlert2(true)
            }
        }
        else {
            setphoneborderColor('#FF3232')
            setFirmaAdiBorderColor('#FF3232')
            setIlBorderColor('#FF3232')
            setIlceBorderColor('#FF3232')
            setNameBorderColor('#FF3232')
            setShowAlert(true)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image source={require('../assets/icon1024.png')} style={{ width: 120, height: 120, resizeMode: 'contain', position: 'absolute' }} />
            </View>
            <View style={{ top: -50 }}>
                <Text style={styles.topText}>
                    {I18n.t('kayitFormu')}
                </Text>
                <Text style={styles.topText2}>
                    Hesap oluşturmak için gerekli olan bilgileri doldurun
                </Text>
            </View>
            <View style={{ top: -40 }}>
                <Text style={styles.title}>{I18n.t('isim')}</Text>
                <TextInput
                    style={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 20, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 50, height: 50, borderColor: nameBorderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={{ top: -20 }}>
                <Text style={styles.title}>{I18n.t('telefonNumarasi')}*</Text>
                <View style={{ flexDirection: 'row' }}>
                    <PhoneInput
                        style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 16, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 50, height: 50, borderColor: phoneborderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                        initialCountry={'tr'}
                        initialValue="90"
                        confirmText='Onayla'
                        confirmTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                        cancelText='Iptal'
                        cancelTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                        textStyle={{ paddingLeft: 20 }}
                        allowZeroAfterCountryCode={false}
                        onChangePhoneNumber={setPhone}
                        textProps={{ maxLength: 17, fontFamily: 'Poppins', color: '#525252' }}
                        autoFormat={true}
                    />
                </View>
            </View>

            <View style={{ top: 0 }}>
                <Text style={styles.title}>{I18n.t('firmaAdi')}*</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 50, height: 50, borderColor: firmaAdiBorderColor, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                        value={firmaAdi}
                        onChangeText={setFirmaAdi}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', top: 20, marginLeft: 30 }}>
                <View style={{ flex: 2 }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: Dimensions.get('screen').width > 500 ? 22 : 14,
                        color: '#525252'
                    }}>İl*</Text>
                    <SelectList
                        setSelected={setSelectedIl}
                        onSelect={() => onSelectIl()}
                        data={ilData}
                        save="key"
                        placeholder='Adres Seçin'
                        maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                        fontFamily="Poppins"
                        boxStyles={{ color: '#808080', height: 50, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: ilBorderColor }}
                        dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                        inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        searchPlaceholder="Ara"
                        dropdownStyles={{ zIndex: 95, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                    />
                </View>
                <View style={{ width: 50 }} />
                <View style={{ flex: 2, right: 30 }}>
                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: Dimensions.get('screen').width > 500 ? 22 : 14,
                        color: '#525252'
                    }}>İlçe*</Text>
                    <SelectList
                        setSelected={(val) => setIlce(val)}
                        data={ilceData}
                        save="key"
                        placeholder='Adres Seçin'
                        maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                        fontFamily="Poppins"
                        boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: ilceBorderColor }}
                        dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                        inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        searchPlaceholder="Ara"
                        dropdownStyles={{ zIndex: 95, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                    />
                </View>
            </View>
            <View style={{ top: 50, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.okudum}>Ennet Takip'in </Text>
                            <Pressable><Text style={styles.kvkk} onPress={() => navigation.navigate('KvkkMetni')}>Gizlilik ve Güvenlik  </Text></Pressable>
                        </View>
                        <Text style={styles.okudum}>metnini okudum ve kabul ediyorum</Text>
                    </View>
                </View>
            </View>
            <View style={{ top: 110 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={styles.cancelButtonCircle} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText} adjustsFontSizeToFit={true}>İptal</Text>
                    </Pressable>
                    <View style={{ width: 20 }} />
                    <Pressable style={styles.loginButtonCircle} onPress={register}>
                        <Text style={styles.buttonText} adjustsFontSizeToFit={true}>İleri</Text>
                    </Pressable>
                </View>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                message="Tüm Alanları Doğru Girdiğinizden Emin Olun"
                messageStyle={{ color: '#A5A5A5', fontSize: 14, fontFamily: 'Poppins' }}
                closeOnTouchOutside={false}
                contentContainerStyle={{ borderRadius: 10, borderColor: '#FF3232', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowAlert(false)
                }}
            />
            <AwesomeAlert
                show={showAlert2}
                showProgress={false}
                message="Devam Etmek İçin Gizlilik Ve Güvenlik Metnini Kabul Etmelisiniz"
                messageStyle={{ color: '#A5A5A5', fontSize: 14, fontFamily: 'Poppins' }}
                closeOnTouchOutside={false}
                contentContainerStyle={{ borderRadius: 10, borderColor: '#FF3232', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowAlert2(false)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    okudum: {
        color: '#525252',
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('screen').width > 500 ? 20 : 14
    },
    kvkk: {
        color: '#525252',
        fontFamily: 'Poppins-SemiBold',
        textDecorationLine: 'underline',
        fontSize: Dimensions.get('screen').width > 500 ? 20 : 14
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('screen').width > 500 ? 22 : 14,
        color: '#525252'
    },
    loginButtonCircle: {
        position: "relative",
        top: 0,
        left: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#67C5B5",
        width: Dimensions.get('screen').width / 2 - 30,
        height: Dimensions.get('screen').width > 500 ? 70 : 50,
    },
    cancelButtonCircle: {
        position: "relative",
        top: 0,
        left: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#F28243",
        width: Dimensions.get('screen').width / 2 - 30,
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
        marginBottom: 20
    },
    topText2: {
        fontFamily: 'Poppins',
        color: '#838383',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 14,
        width: Dimensions.get('screen').width - 30,
        textAlign: 'center',
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
})
export default Register