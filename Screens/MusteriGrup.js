
import { View, Text, Dimensions, TextInput, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"
const MusteriGrup = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [oran, setOran] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [token, setToken] = useState('')
    const [showAlertCreate, setShowAlertCreate] = useState(false)
    const onSubmit = () => {
        if (name !== '' && oran !== '') {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "discount": oran,
                "name": name,
                "description": "test"
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://ennettakip.com/api/v1/customer-group", requestOptions)
                .then(response => console.log(response.status))
                .then(result => setShowAlertCreate(true))
                .catch(error => console.log('error', error));
        }
        else {
            setShowAlert(true)
        }
    }
    useEffect(() => {

        AsyncStorage.getItem('token').then((val) => {

            setToken("Bearer " + val)
        });
    }, [])
    return (

        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 100, bottom: 40, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center'
                }}>
                    İndirim Grubu Ekle
                </Text>
                <View style={{ flexDirection: 'row', top: 20 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30, marginTop: 60 }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Grup Adı</Text>
                    <TextInput onChangeText={setName} placeholder='Mehmet Yılmaz' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', textAlign: 'center', color: '#9A9A9A' }} />
                </View>
                <View style={{ width: 20 }} />
                <View style={{ flex: 2 }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>% Oranı</Text>
                    <TextInput onChangeText={setOran} placeholder='Bir Yüzdelik Girin' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', textAlign: 'center', color: '#9A9A9A' }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: 20, position: 'absolute', bottom: 20 }}>
                <View>
                    <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                </View>
                <View style={{ width: 15 }} />
                <View>
                    <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }} onPress={() => onSubmit()}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} >İleri</Text></Pressable>
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
                show={showAlertCreate}
                showProgress={false}
                message="Müşteri Grubu Oluşturuldu!"
                messageStyle={{ color: '#3DBC88', fontSize: 14, fontFamily: 'Poppins' }}
                closeOnTouchOutside={false}
                contentContainerStyle={{ borderRadius: 10, borderColor: '#FF3232', borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, width: Dimensions.get('screen').width - 50 }}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setShowAlertCreate(false)
                    navigation.navigate('Musteriler')
                }}
            />
        </View>

    )
}


export default MusteriGrup