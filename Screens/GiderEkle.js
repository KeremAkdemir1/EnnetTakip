import { SelectList } from 'react-native-dropdown-select-list'
import { Text, View, Image, Pressable, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n, { t } from 'i18n-js'
import AwesomeAlert from 'react-native-awesome-alerts';
const GiderEkle = () => {
    const [token, setToken] = useState("")
    const [oldTip, setOldTip] = useState([])
    const [tip, setTip] = useState([])
    const [selectedTip, setSelectedTip] = useState(undefined)

    const [oldUser, setOldUser] = useState([])
    const [user, setUser] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)

    const [giderSelected, setGiderSelected] = useState("");

    const [price, setPrice] = useState("")

    const [note, setNote] = useState("")

    const [showTrueAlert, setShowTrueAlert] = useState(false)
    const [showFalseAlert, setShowFalseAlert] = useState(false)
    useEffect(() => {
      
        AsyncStorage.getItem('token').then((val) => {
            setToken("Bearer " + val)
        });
    }, [])
    
    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://ennettakip.com/api/v1/expense-type", requestOptions)
            .then(response => response.json())
            .then(result => setOldTip(result))
            .catch(error => console.log('error', error));



        var userrequestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://ennettakip.com/api/v1/user/business/simple", userrequestOptions)
            .then(response => response.json())
            .then(result => setOldUser(result))
            .catch(error => console.log('error', error));
    }, [token])

    useEffect(() => {
        oldTip.forEach((value) => {
            tip.push({ key: value.id, value: value.name })
        });
    }, [oldTip])

    useEffect(() => {
        oldUser.forEach((value) => {
            user.push({ key: value.id, value: value.name + " " + value.surname })
        });
    }, [oldUser])

    const navigation = useNavigation()
    const data = [
        { key: 'DAILY', value: 'Günlük' },
        { key: 'WEEKLY', value: 'Haftalık' },
        { key: 'MONTHLY', value: 'Aylık' },
        { key: 'YEARLY', value: 'Yıllık' },
    ]
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onSubmit = () => {
        if (selectedTip != "" && price != "" && giderSelected != "") {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "expenseTypeId": selectedTip,
                "price": price,
                "notes": note,
                "theSpendUserId": selectedUser,
                "expenseKind": giderSelected
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("https://ennettakip.com/api/v1/expense", requestOptions)
                .then((response) => { response.status === 201 ? setShowTrueAlert(true) : setShowFalseAlert(true) })
                .catch(error => console.log('error', error));

        }
        else {
            setShowFalseAlert(true)
        }

    }
    return (

        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.topText}>
                    {I18n.t('giderEkleme')}
                </Text>
                <View style={{ flexDirection: 'row', top: 40 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginRight: 30, marginTop: 100 }}>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 5 }}>Gider Turu</Text>
                        <SelectList
                            setSelected={(val) => setGiderSelected(val)}
                            data={data}
                            save="key"
                            placeholder='Gider Türü'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            boxStyles={{ width: Dimensions.get('screen').width > 500 ? 350 : 140, height: 50 }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            searchPlaceholder="Ara"
                            dropdownStyles={{ zIndex: 99, position: 'absolute', width: Dimensions.get('screen').width > 500 ? 350 : 160, backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                        />
                    </View>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 5 }}>Giderin Tipi</Text>
                        <SelectList
                            setSelected={(val) => setSelectedTip(val)}
                            data={tip}
                            save="key"
                            placeholder='Gider Tipi Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            boxStyles={{ width: Dimensions.get('screen').width > 500 ? 350 : 140, height: 50 }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            searchPlaceholder="Ara"
                            dropdownStyles={{ zIndex: 99, position: 'absolute', width: Dimensions.get('screen').width > 500 ? 350 : 160, backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 5 }}>Eklenecek Kişi</Text>
                        <SelectList
                            setSelected={(val) => setSelectedUser(val)}
                            data={user}
                            save="key"
                            placeholder='Kişi Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 140}
                            fontFamily="Poppins"
                            boxStyles={{ width: Dimensions.get('screen').width > 500 ? 350 : 140, height: 50 }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            searchPlaceholder="Ara"
                            dropdownStyles={{ zIndex: 99, position: 'absolute', width: Dimensions.get('screen').width > 500 ? 350 : 160, backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                        />
                    </View>
                    <View style={{ width: 0 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 5 }}>Fiyat Bilgisi</Text>
                        <TextInput onChangeText={setPrice} placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width > 500 ? 340 : 145, height: 50, borderRadius: 10, borderColor: '#CCCCCC', borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2 }} />
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    <View>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 40 }}>Not ekle</Text>
                        <TextInput onChangeText={setNote} textAlignVertical='top' multiline={true} placeholder='Not Yazın' numberOfLines={10} style={{ marginLeft: 35, paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 80, height: 100, borderRadius: 10, borderColor: '#CCCCCC', borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2 }} />
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <View>
                        <Text style={{ paddingBottom: 10, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, color: '#203A4B', left: 15 }}>Harcamanın Görselini yükleyebilirsiniz</Text>
                        <Pressable style={{ borderWidth: 2, borderRadius: 10, borderColor: '#CCCCCC', borderStyle: 'dashed', width: Dimensions.get('screen').width - 80, height: 120, alignItems: 'center', marginLeft: 20 }} onPress={pickImage}><Image style={{ marginTop: 30, resizeMode: 'contain', width: 30, height: 40 }} source={require('../assets/upload.png')} /><Text style={{ position: 'absolute', top: 70, fontFamily: 'Poppins', color: '#9A9A9A' }}>Görsel Seç</Text>{image && <Image source={{ uri: image }} style={{ position: 'absolute', marginTop: 0, width: Dimensions.get('screen').width - 50, height: Dimensions.get('screen').width > 500 ? 100 : 115, resizeMode: 'contain' }} />}</Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View>
                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: Dimensions.get('screen').width / 3, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }} onPress={() => onSubmit()}>Kaydet</Text></Pressable>
                    </View>
                    <View style={{ width: 30 }} />
                    <View>
                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: Dimensions.get('screen').width / 3, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }} onPress={() => navigation.goBack()}>Kapat</Text></Pressable>
                    </View>
                </View>
                <View style={{ height: 60 }} />
                <AwesomeAlert
                    show={showTrueAlert}
                    showProgress={false}
                    message="Gider Eklendi"
                    messageStyle={{ color: '#A5A5A5', fontSize: 14, fontFamily: 'Poppins' }}
                    closeOnTouchOutside={false}
                    contentContainerStyle={{ borderRadius: 10, borderColor: '#67C5B5', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Tamam"
                    confirmButtonColor="#67C5B5"
                    onConfirmPressed={() => {
                        navigation.navigate('BottomTab')
                        setShowTrueAlert(false)
                    }}
                />

                <AwesomeAlert
                    show={showFalseAlert}
                    showProgress={false}
                    message="Lütfen Tüm Bilgilerinizi Doğru Girin"
                    messageStyle={{ color: '#A5A5A5', fontSize: 14, fontFamily: 'Poppins' }}
                    closeOnTouchOutside={false}
                    contentContainerStyle={{ borderRadius: 10, borderColor: '#DD6B55', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Tamam"
                    confirmButtonColor="#DD6B55"
                    onConfirmPressed={() => {
                        setShowFalseAlert(false)
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    topView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -40,
    },
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left: 5
    },
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        textAlign: 'center',
        top: 25
    },
})
export default GiderEkle