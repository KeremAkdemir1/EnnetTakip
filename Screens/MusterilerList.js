import * as React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
import I18n from 'i18n-js';
import { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Pressable, TextInput, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const MusterilerList = () => {
    const navigation = useNavigation()
    const [placeHolder, setPlaceHolder] = useState('Isim Soyisim Telefon Numarası')
    const [background1, setBackground1] = useState('#FFF')
    const [background2, setBackground2] = useState('#EFEFEF')
    const [token, setToken] = useState('')
    const [background3, setBackground3] = useState('#EFEFEF')
    const [customerData,setCustomerData] = useState(undefined)
    const tableData = [
        ['1', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['2', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['3', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['4', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['5', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],

        ['6', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['7', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['8', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],

        ['9', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['10', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],
        ['11', '0532 345 56 78', '0532 345 56 78', 'buton', 'android', 'giden', '00:01:10', '21.11.2022 22:57:14'],

    ];

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
        AsyncStorage.getItem('token').then((val) => {
                
                setToken("Bearer " +val)
                console.log(val)
        });
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "page": 0,
            "size": 10
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://ennettakip.com/api/v1/customer/search", requestOptions)
            .then(response => response.json())
            .then(result => setCustomerData(result.data))
            .catch(error => console.log('error', error));
        })
        return unsubscribe
    }, [navigation])

    const clickFirst = () => {
        setPlaceHolder('Isim Soyisim Telefon Numarası')
        setBackground1('#FFFFFF')
        setBackground2('#EFEFEF')
        setBackground3('#EFEFEF')
    }
    const clickSecond = () => {
        setPlaceHolder('Sipariş Numarası')
        setBackground1('#EFEFEF')
        setBackground2('#FFFFFF')
        setBackground3('#EFEFEF')
    }
    const clickThird = () => {
        setPlaceHolder('Adres')
        setBackground1('#EFEFEF')
        setBackground2('#EFEFEF')
        setBackground3('#FFFFFF')
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={{ marginTop: 100, bottom: 50, left: 0 }}>
                    <Text style={{
                        fontFamily: 'Poppins-Bold',
                        color: '#525252',
                        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center'
                    }}>
                        Müşteri Listesi
                    </Text>
                    <View style={{ flexDirection: 'row', top: 0 }}>
                        <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                        <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                        <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                        <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                        <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: -20 }}>
                    <CircularProgress
                        maxValue={100}
                        value={9}
                        valueSuffix={''}
                        inActiveStrokeColor={'#EAE9E9'}
                        activeStrokeColor={'#2ecc71'}
                        inActiveStrokeOpacity={2}
                        progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                        radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                        title='Bireysel'
                    />
                    <View style={{ width: 8 }} />
                    <CircularProgress
                        maxValue={100}
                        value={9}
                        inActiveStrokeColor={'#EAE9E9'}
                        activeStrokeColor={'#0CBDDE'}
                        inActiveStrokeOpacity={2}
                        progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                        radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                        title='Kurumsal'
                    />
                    <View style={{ width: 8 }} />
                    <CircularProgress
                        maxValue={20}
                        value={9}
                        valueSuffix={''}
                        inActiveStrokeColor={'#EAE9E9'}
                        activeStrokeColor={'#FECB10'}
                        inActiveStrokeOpacity={2}
                        progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 12}
                        radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                        title='Kara Liste'
                    />
                    <View style={{ width: 8 }} />
                    <CircularProgress
                        maxValue={1000}
                        value={200}
                        valueSuffix={''}
                        inActiveStrokeColor={'#EAE9E9'}
                        activeStrokeColor={'#67C5B5'}
                        progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                        inActiveStrokeOpacity={2}
                        radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                        title='Toplam'
                    />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 20, left: 10 }}>
                    <Pressable style={{ backgroundColor: background1, width: 147, height: 43, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 6, top: -20 }} onPress={() => clickFirst()}>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontFamily: 'Poppins', fontSize: 13 }}>Isim-Telefon</Text>
                    </Pressable>
                    <View style={{ width: 10 }} />
                    <Pressable style={{ backgroundColor: background2, width: 94, height: 43, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 6, top: -20 }} onPress={() => clickSecond()}>
                        <Text style={{ textAlign: 'center', marginTop: 10, color: '#6B7172', fontFamily: 'Poppins', fontSize: 13 }}>Sipariş No</Text>
                    </Pressable>
                    <View style={{ width: 10 }} />
                    <Pressable style={{ backgroundColor: background3, width: 68, height: 43, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 6, top: -20 }} onPress={() => clickThird()}>
                        <Text style={{ textAlign: 'center', marginTop: 10, color: '#6B7172', fontFamily: 'Poppins', fontSize: 13 }}>Adres</Text>
                    </Pressable>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: Dimensions.get('screen').width - 30, height: 90, left: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: -20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={{ marginLeft: 15, marginTop: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 120, height: 50, borderColor: '#67C5B5', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                            maxLength={40}
                            placeholder={placeHolder}
                        />
                        <View style={{ width: 15 }} />
                        <Pressable style={{ width: 50, height: 50, marginTop: 20, borderRadius: 10, backgroundColor: '#67C5B5' }} onPress={() => navigation.navigate('MusteriEkle')}><Image source={require('../assets/addCustomer.png')} style={{ width: 40, height: 40, resizeMode: 'contain', left: 1, top: 3 }} /></Pressable>
                    </View>
                </View>

                <FlatList
                    style={{ width: Dimensions.get('screen').width, left: 10 }}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 800 }}
                    data={customerData}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate('MusteriProfil')}>
                            <View style={{ width: Dimensions.get('screen').width - 20, height: Dimensions.get('screen').width > 500 ? 250 : 170, borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10, borderColor: '#22C132', elevation: 6, backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#E5EBDF', width: 50, height: 50, borderRadius: 10, marginLeft: 10, marginTop: 10 }}>
                                        <Text style={{ fontSize: 21, fontFamily: 'Poppins', color: '#7A7C7A', textAlign: 'center', top: 10 }}>{item.id}</Text>
                                    </View>
                                    <View style={{ width: Dimensions.get('screen').width / 2, alignItems: 'center', top: 15 }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#7A7C7A', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16 }}>{item.name}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center', top: 10 }}>
                                    <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, fontFamily: 'Poppins', width: Dimensions.get('screen').width - 40, marginLeft: 20, color: '#616161' }}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                                </View>
                                <View style={{ top: 20, width: Dimensions.get('screen').width - 60, left: 15, alignItems: 'center', backgroundColor: '#FFDEDE', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40, borderColor: '#FF0606', height: Dimensions.get('screen').width > 500 ? 50 : 25 }}>
                                    <View style={styles.notebar}>
                                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', top: Dimensions.get('screen').width > 500 ? 10 : 0 }}>Not:</Text>
                                    </View>
                                    <View>
                                        <Text style={{ textAlign: 'center', color: '#FF0606', fontSize: Dimensions.get('screen').width > 500 ? 18 : 12, fontFamily: 'Poppins', left: 30, top: Dimensions.get('screen').width > 500 ? 10 : 2 }}>Gitmeden 20 dk önce arancak</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    )}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    width: "100%",
                                    height: 40,
                                }} />
                        );
                    }}
                />
            </View>
        </View>
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
})

export default MusterilerList