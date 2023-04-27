import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView, Button, TextInput } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from "@expo/vector-icons";
import DatePicker from 'react-native-datepicker-expo'
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdresEkle = () => {

    const [il, setIl] = useState('')
    const [ilce, setIlce] = useState('')
    const navigation = useNavigation()
    const ilData = [
        { key: '1', value: 'İstanbul' },
        { key: '2', value: 'İzmir' },
        { key: '3', value: 'Ankara' },
        { key: '4', value: 'Antalya' },
        { key: '5', value: 'Trabzon' },
    ]
    const ilceData = [
        { key: '1', value: 'Ataşehir' },
        { key: '2', value: 'Bağcılar' },
        { key: '3', value: 'Kadıköy' },
    ]
    return (
        <ScrollView>
            <View style={styles.topView}>
                <Text style={styles.topText}>
                    Adres Ekle
                </Text>
                <View style={{ flexDirection: 'row', top: 40 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <View style={{ marginTop: 150, marginLeft: 30 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>İsim Soyisim</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, height: 50, borderColor: '#CCCCCC', borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Açıklama</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>İl</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderWidth:Dimensions.get('screen').width > 500 ? 2 : 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder=""
                            defaultOption={{ key: '1', value: 'İstanbul' }}
                            dropdownStyles={{ zIndex: 99, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>İlçe</Text>
                        <SelectList
                            setSelected={(val) => setIlce(val)}
                            data={ilceData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderWidth:Dimensions.get('screen').width > 500 ? 2 : 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'Ataşehir' }}
                            dropdownStyles={{ zIndex: 98, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Mahalle</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderWidth:Dimensions.get('screen').width > 500 ? 2 : 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'İstanbul' }}
                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Cadde</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Sokak Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Sokak Numarası</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Bina & Site Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Sokak Numarası</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Kat</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Daire</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Adres Açıklama (Adres Tarifi)</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Not Yazın' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 60, height: 100, borderRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent:'space-evenly', marginTop: 60,marginLeft:20,marginRight:20 }}>
                <View style={{flex:1}}>
                    <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20,height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13,fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                </View>
                <View style={{ width: 15 }} />
                <View style={{flex:1}}>
                    <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20,height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13,fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 }} >Kaydet</Text></Pressable>
                </View>
            </View>
            <View style={{ height: 50 }} />
        </ScrollView>
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
        top: 30
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
export default AdresEkle