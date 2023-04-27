import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from "@react-navigation/native"
const NotEkle = () => {
    const navigation = useNavigation()
    const [orderList, setOrderList] = useState([])
    const noteType = [
        { key: 'ORDER', value: 'Sipariş' },
        { key: 'CUSTOMER', value: 'Müşteri' }
    ]
    const [token, setToken] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    useEffect(() => {

        AsyncStorage.getItem('token').then((val) => {

            setToken("Bearer " + val)
        });
    }, [])

    useEffect(() => {



    }, [token])



    const [selectedType, setSelectedType] = useState("ORDER")
    const [note, setNote] = useState("")

    useEffect(() => {
      
        var newArray = orderList.filter(function (el) {
            return el.type == selectedType
        });
        var lastOrderId = 0
        console.log(newArray)
        if (newArray.length === 0) {
            lastOrderId == 0
        }
        else {
            var lengthArray = newArray.length - 1
            lastOrderId = newArray[lengthArray].order + 1

        }
        console.log(orderList)
        if (selectedType != "" && selectedType != null && note != "" && note != null) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "order": lastOrderId,
                "note": note,
                "type": selectedType
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://ennettakip.com/api/v1/default-note", requestOptions)
                .then((response) => {response.status === 201 ? navigation.navigate('NotListesi') : setShowAlert(true)})
                .catch(error => console.log('error', error));
        }
        else {
            setShowAlert(true)
        }

    }, [orderList])
    
    const onSave = () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("https://ennettakip.com/api/v1/default-note", requestOptions)
            .then(response => response.json())
            .then(result => setOrderList(result))
            .catch(error => console.log('error', error));

       
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center', top: -20
                }}>
                    Not Ekle
                </Text>
                <View style={{ flexDirection: 'row', top: -10 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, marginTop: 40 }}>
                    <View style={{ flex: 2 }}>
                        <TextInput placeholder='Not Girin' onChangeText={setNote} style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', textAlign: 'center', color: '#9A9A9A', paddingTop: 3, paddingLeft: 10, paddingRight: 10 }} />
                    </View>
                    <View style={{ width: 10 }} />
                    <View style={{ flex: 2 }}>
                        <SelectList
                            setSelected={(val) => setSelectedType(val)}
                            data={noteType}
                            save="key"
                            placeholder='Not Tipi Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderWidth: Dimensions.get('screen').width > 500 ? 2 : 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder=""
                            dropdownStyles={{ zIndex: 99, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                            defaultOption={{ key: 'ORDER', value: 'Sipariş' }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20, marginRight: 20, bottom: 20, flex: 1, position: 'absolute' }}>
                <View style={{ flex: 1 }}>
                    <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                </View>
                <View style={{ width: 15 }} />
                <View style={{ flex: 1 }}>
                    <Pressable onPress={() => onSave()} style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }} >Kaydet</Text></Pressable>
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
        </View>
    )
}


export default NotEkle 