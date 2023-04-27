import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState, useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import AnimatedHideView from "react-native-animated-hide-view"
import AsyncStorage from '@react-native-async-storage/async-storage'
const MusteriEkle = () => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState("01.01.2023");
    const [display, setDisplay] = useState('flex')
    const [musteri, setMusteri] = useState('')
    const [cinsiyet, setCinsiyet] = useState('')
    const [grup, setGrup] = useState('')
    const navigation = useNavigation()
    const [selectedGrup, setSelectedGrup] = useState('')
    const [show, setShow] = useState(false)
    const [customerNote, setCustomerNote] = useState('')

    const [corporateName, setCorporateName] = useState('')
    const [taxAdministration, setTaxAdministration] = useState('')
    const [taxNumber, setTaxNumber] = useState('')
    const [mersisNo, setMersisNo] = useState('')
    const [sicilNo, setSicilNo] = useState('')
    const [invoicePreference, setInvoicePreference] = useState('E_ARCHIVE')
    const [token, setToken] = useState('')
    const [showAlertCreate, setShowAlertCreate] = useState(false)
    const grupdata = [
        { key: '1', value: 'Bireysel' },
        { key: '2', value: 'Kurumsal' }
    ]
    const cinsiyetdata = [
        { key: '1', value: 'Erkek' },
        { key: '2', value: 'Kadın' }
    ]
    const indirimdata = [
        { key: '1', value: '%10' },
        { key: '2', value: '%20' },
        { key: '3', value: '%30' },
        { key: '4', value: '%40' },
        { key: '5', value: '%50' },
        { key: '6', value: '%60' },
        { key: '7', value: '%70' },
        { key: '8', value: '%80' },
        { key: '9', value: '%90' },
        { key: '10', value: '%100' },
    ]
    const [selectedCinsiyet, setSelectedCinsiyet] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [showAlert2, setShowAlert2] = useState(false)
    const onSelectGrup = () => {
        if (selectedGrup == 'Kurumsal') {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    useEffect(() => {

        AsyncStorage.getItem('token').then((val) => {

            setToken("Bearer " + val)
        });
    }, [])

    const onSubmit = () => {
        if (phone !== '' && name !== '' && date !== '' && selectedGrup !== '' && cinsiyet !== '') {


            if (selectedGrup === 'Kurumsal') {
                if (corporateName !== '' && taxAdministration !== '' && taxNumber !== '' && mersisNo !== '' && sicilNo !== '') {
                    const newPhone = phone.substring(4, 7) + phone.substring(8, 11) + phone.substring(12, 14) + phone.substring(15, 17)
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", token);
                    var raw = JSON.stringify({
                        "name": name,
                        "customerNote": customerNote,
                        "blackList": false,
                        "customerGroupId": 1,
                        "sex": true,
                        "corporate": {
                            "corporateName": corporateName,
                            "taxAdministration": taxAdministration,
                            "taxNumber": taxNumber,
                            "mersisNo": mersisNo,
                            "sicilNo": sicilNo,
                            "invoicePreference": invoicePreference
                        },
                        "birthday": "2023-03-25",
                        "contacts": [
                            {
                                "phone": newPhone,
                                "fullName": name,
                                "isDefault": true,
                                "note": "test"
                            }
                        ]
                    });
                    console.log(raw)
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };
                    fetch("https://ennettakip.com/api/v1/customer", requestOptions)
                        .then(response => console.log(response.status))
                        .then(result => setShowAlertCreate(true))
                        .catch(error => console.log('error', error));
                }
                else {
                    setShowAlert2(true)
                }
            }
            else {
                const newPhone = phone.substring(4, 7) + phone.substring(8, 11) + phone.substring(12, 14) + phone.substring(15, 17)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", token);
                var raw = JSON.stringify({
                    "name": name,
                    "customerNote": customerNote,
                    "blackList": false,
                    "customerGroupId": 1,
                    "sex": true,
                    "birthday": "2023-03-25",
                    "contacts": [
                        {
                            "phone": newPhone,
                            "fullName": name,
                            "isDefault": true,
                            "note": "string"
                        }
                    ]
                });
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://ennettakip.com/api/v1/customer", requestOptions)
                    .then(response => console.log(response.status))
                    .then(result => setShowAlertCreate(true))
                    .catch(error => console.log('error', error));
            }
        }
        else {
            setShowAlert(true)
        }

    }
    return (
        <ScrollView>

            <View style={{ marginTop: 100, bottom: 40, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center'
                }}>
                    Müşteri Ekle
                </Text>
                <View style={{ flexDirection: 'row', top: 20 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <View style={{ marginTop: 20, marginLeft: 20 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, marginTop: 10 }}>Ad Soyad:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 1 }}>
                        <TextInput onChangeText={setName} placeholder='Mehmet Yılmaz' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, right: 20, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, marginTop: 10 }}>Telefon:</Text>
                    <View style={{ width: 29 }} />
                    <View style={{ flex: 2 }}>
                        <PhoneInput
                            style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 16, textAlign: 'left', height: 50, borderColor: '#CCCCCC', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                            initialCountry={'tr'}
                            initialValue="90"
                            confirmText='Onayla'
                            confirmTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                            cancelText='Iptal'
                            cancelTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                            allowZeroAfterCountryCode={false}
                            textProps={{ maxLength: 17, fontFamily: 'Poppins', color: '#525252', fontSize: 13.5 }}
                            autoFormat={true}
                            onChangePhoneNumber={setPhone}
                            maxLength={10}
                            flagStyle={{ marginLeft: 8 }}
                            iconStyle={{ left: 10 }}
                        />
                    </View>
                    <View style={{ width: 2 }} />
                    <Pressable onPress={() => navigation.navigate('TelefonEkle')} style={{ width: 45, height: 45, backgroundColor: '#67C5B5', marginRight: 20, marginTop: 3, borderRadius: 10 }}><Image source={require('../assets/call2.png')} style={{ width: 35, height: 35, resizeMode: 'contain', left: 8, top: 5 }} /></Pressable>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, marginTop: 10 }}>Açıklama:</Text>
                    <View style={{ width: 35 }} />
                    <View style={{ flex: 1 }}>
                        <TextInput placeholder='Kendisi' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, right: 20, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ backgroundColor: '#dbd7d7', borderRadius: 10, marginRight: 40, width: Dimensions.get('screen').width - 30 }}>
                    <Collapse onToggle={(x) => x === true ? setDisplay('none') : setDisplay('flex')}>
                        <CollapseHeader style={{ height: 90, backgroundColor: '#FFF', borderRadius: 10, width: Dimensions.get('screen').width - 50, marginLeft: 10, marginTop: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#808080' }}>Ahmet Yılmaz</Text><Text style={{ marginLeft: 40, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#696969' }}>0532 345 56 78</Text><Image style={{ width: 30, marginLeft: 10, marginTop: 10, height: 30 }} source={require('../assets/cancel.png')} />
                            </View>
                            <Text style={{ marginLeft: 20, top: -10, fontFamily: 'Poppins', height: 40, color: '#C0BABA' }}>Açıklama: Babası</Text>

                        </CollapseHeader>
                        <CollapseBody style={{ height: 140, backgroundColor: '#FFF', borderRadius: 20, borderTopRightRadius: 0, top: -28, width: Dimensions.get('screen').width - 50, left: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.date}>
                                    <Text style={{ left: 5, fontFamily: 'Poppins-SemiBold', top: 12, color: '#808080', fontSize: 12 }}>Kayıt T:</Text>
                                    <Text style={{ fontFamily: 'Poppins', left: 0, top: 13, color: '#696969', fontSize: 11 }}>13.01.2023</Text>
                                    <Text style={{ right: 0, fontFamily: 'Poppins', top: 13, color: '#696969', fontSize: 11 }}>14:12:59</Text>
                                </View>
                                <View style={{ width: 5 }} />
                                <View style={styles.date2}>
                                    <Text style={{ left: 5, fontFamily: 'Poppins-SemiBold', top: 12, color: '#808080', fontSize: 12 }}>Onay T:</Text>
                                    <Text style={{ fontFamily: 'Poppins', left: 0, top: 13, color: '#696969', fontSize: 11 }}>13.01.2023</Text>
                                    <Text style={{ right: 0, fontFamily: 'Poppins', top: 13, color: '#696969', fontSize: 11 }}>14:12:59</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', left: 7 }}>
                                <View style={{ flex: 3 }}>
                                    <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45, marginRight: 10 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 15, textAlign: 'center', marginTop: 12 }}>Düzenle</Text></Pressable>
                                </View>
                                <View style={{ width: 1 }} />
                                <View style={{ flex: 3 }}>
                                    <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45, marginRight: 10 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 15, textAlign: 'center', marginTop: 12 }}>Onayla</Text></Pressable>
                                </View>
                                <View style={{ width: 1 }} />
                                <View style={{ flex: 3 }}>
                                    <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 45, marginRight: 10 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 14, textAlign: 'center', marginTop: 12 }}>Kaydet</Text></Pressable>
                                </View>
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <View style={{ width: Dimensions.get('screen').width - 70, height: display === 'flex' ? 20 : 0 }} />
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>İndirim Grubu</Text>
                        <SelectList
                            setSelected={(val) => setMusteri(val)}
                            data={indirimdata}

                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: '%10' }}
                            dropdownStyles={{ zIndex: 99, width: Dimensions.get('screen').width / 2.4, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Müşteri Grubu</Text>
                        <SelectList
                            setSelected={(val) => setSelectedGrup(val)}
                            data={grupdata}
                            save="value"
                            placeholder='Grup Seçin'
                            onSelect={() => onSelectGrup()}
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            defaultOption={{ key: '1', value: 'Bireysel' }}
                            searchPlaceholder="Ara"
                            dropdownStyles={{ zIndex: 99, width: Dimensions.get('screen').width / 2.4, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Cinsiyet</Text>
                        <SelectList
                            setSelected={(val) => setCinsiyet(val)}
                            data={cinsiyetdata}
                            save="value"
                            placeholder='Cinsiyet Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 2.4, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                    <View style={{ width: 20 }} />
                    <View style={{ flex: 2, marginRight: 23, marginTop: 3 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Doğum Tarihi</Text>
                        <DatePicker
                            style={{ borderRadius: 20, fontFamily: 'Poppins', width: Dimensions.get('screen').width / 2.5 }}
                            date={date}

                            androidMode="spinner"
                            mode="date"
                            placeholder="select date"
                            format="DD.MM.YYYY"
                            minDate="01-01-2023"
                            maxDate="01-01-2040"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            iconSource={require('../assets/date.png')}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,

                                },
                                dateText: {
                                    fontFamily: 'Poppins',
                                    color: '#9A9A9A',
                                    fontSize: 14
                                },
                                dateInput: {
                                    borderRadius: 10,
                                    height: 50,
                                    width: Dimensions.get('screen').width / 2.5,
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => setDate(date)}
                        />
                    </View>
                </View>
                <View style={{ height: 20 }} />

                <View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Müşteri Notu</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Not Yazın' onChangeText={setCustomerNote} numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 45, height: 100, borderRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
                    </View>
                </View>
                <AnimatedHideView visible={show} style={{ height: show === false ? 0 : 'auto' }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, marginLeft: 0, paddingBottom: 20, textAlign: 'left', marginTop: 30 }}>Şirket Bilgileri</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Şirket Adı</Text>
                            <TextInput onChangeText={setCorporateName} placeholder="Ünvan" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                        </View>
                        <View style={{ width: 20 }} />
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Vergi Dairesi</Text>
                            <TextInput onChangeText={setTaxAdministration} placeholder="Pendik" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                        </View>
                        <View style={{ width: 50 }} />
                        <View style={{ flex: 2, right: 30 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Vergi No veya TC</Text>
                            <TextInput onChangeText={setTaxNumber} placeholder="44898564001" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                        </View>
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Mersis No</Text>
                            <TextInput onChangeText={setMersisNo} placeholder="3485-1245-1475-1569" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A', paddingRight: 10, fontSize: 13 }} />

                        </View>
                        <View style={{ width: 50 }} />
                        <View style={{ flex: 2, right: 30 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sicil No</Text>
                            <TextInput onChangeText={setSicilNo} placeholder="101548" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                        </View>
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>E-posta Adresi</Text>
                            <TextInput placeholder="destek@ennettakip.com.tr" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                        </View>
                        <View style={{ width: 20 }} />
                    </View>

                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row', backgroundColor: '#d1cfcf', width: Dimensions.get('screen').width - 50, borderRadius: 10, height: 60 }}>

                        <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 15, marginTop: 18, marginLeft: 10 }}>Fatura Türü</Text>
                        <View style={{ position: 'absolute', right: 15, flexDirection: 'row' }}>
                            <Pressable style={{ width: 70, backgroundColor: invoicePreference === 'E_ARCHIVE' ? '#3DBC88' : '#DCDCDC', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} onPress={() => setInvoicePreference('E_ARCHIVE')}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>e-arşiv</Text></Pressable>
                            <View style={{ width: 2 }} />
                            <Pressable style={{ width: 70, backgroundColor: invoicePreference === 'E_INVOICE' ? '#3DBC88' : '#DCDCDC', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} onPress={() => setInvoicePreference('E_INVOICE')}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>e-fatura</Text></Pressable>
                        </View>
                    </View>
                </AnimatedHideView>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: 20 }}>
                <View>
                    <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                </View>
                <View style={{ width: 15 }} />
                <View>
                    <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }} onPress={() => onSubmit()}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} >İleri</Text></Pressable>
                </View>
            </View>
            <View style={{ height: 50 }} />
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
                message="Kurumsal Bilgilerinizi Doğru Girdiğinizden Emin olun"
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
                        <AwesomeAlert
                show={showAlertCreate}
                showProgress={false}
                message="Müşteri Oluşturuldu!"
                messageStyle={{ color: '#A5A5A5', fontSize: 14, fontFamily: 'Poppins' }}
                closeOnTouchOutside={false}
                contentContainerStyle={{ borderRadius: 10, borderColor: '#3DBC88', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowAlertCreate(false)
                    navigation.navigate('Musteriler')
                }}
            />
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left: 5
    },
    notebar: {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#FF0606',
        top: -1,
        width: Dimensions.get('screen').width > 500 ? 100 : 60,
        height: Dimensions.get('screen').width > 500 ? 50 : 22,
        borderRadius: 30,
        left: -1,
    },
    topView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        top: 30
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        flex: 2,
        elevation: 6,
        borderRadius: 10,
        marginLeft: 15,
        height: 40,
        backgroundColor: '#FFF'
    },
    date2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        flex: 2,
        elevation: 6,
        borderRadius: 10,
        marginLeft: 10,
        height: 40,
        backgroundColor: '#FFF',
        marginRight: 10
    },
})
export default MusteriEkle