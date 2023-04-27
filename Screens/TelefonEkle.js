
import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView, Button, TextInput } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from "@expo/vector-icons";
import DatePicker from 'react-native-datepicker-expo'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
const TelefonEkle = () => {
    const [phone, setPhone] = useState('')
    const navigation = useNavigation()


    return (
        <View>

            <View style={{ top: 30, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Telefon Ekle
                </Text>
                <View style={{ flexDirection: 'row', top: 60 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
                <View />
            </View>
            <View style={{ marginTop: 120, marginLeft: 30, height: Dimensions.get('window').height - 190 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>İsim Soyisim</Text>
                        <TextInput placeholder='Mehmet Yılmaz' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                    <View style={{ width: 50 }} />

                </View>
                <View style={{ height: 20 }} />
                <View>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins',fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Telefon Numarası</Text>
                    <PhoneInput
                        style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A',marginRight:50 }} initialCountry={'tr'}
                        initialValue="90"
                        confirmText='Onayla'
                        confirmTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                        cancelText='Iptal'
                        cancelTextStyle={{ fontFamily: 'Poppins', color: '#FF3232' }}
                        textStyle={{ paddingLeft: 20 }}
                        allowZeroAfterCountryCode={false}
                        textProps={{ maxLength: 17, fontFamily: 'Poppins', color: '#525252' }}
                        autoFormat={true}
                        onChangePhoneNumber={setPhone}
                        maxLength={10}
                    />
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Açıklama</Text>
                        <TextInput placeholder='Açıklama' style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                    <View style={{ width: 50 }} />

                </View>

                <View style={{ flexDirection: 'row', marginLeft: 0, position: 'absolute', bottom: 0, left: -10 }}>
                    <View>
                        <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                    </View>
                    <View style={{ width: 15 }} />
                    <View>
                        <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} >Kaydet</Text></Pressable>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
        top: 40
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
})
export default TelefonEkle