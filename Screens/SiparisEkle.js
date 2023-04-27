import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView, Button } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from "@expo/vector-icons";
import DatePicker from 'react-native-datepicker-expo'
import { SelectList } from 'react-native-dropdown-select-list'
const SiparisEkle = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState("01.01.2023");
    const [grup, setGrup] = useState('')
    const grupdata = [
        { key: '1', value: '34 VD 11' },
        { key: '2', value: '34 AB 25' }
    ]
    const cinsiyetdata = [
        { key: '1', value: 'Mehmet Yılmaz' },
        { key: '2', value: 'Hasan Aydın' },
        { key: '2', value: 'Cüneyt Toprak' },
    ]
    const adresData = [
        { key: '1', value: 'Ahmet Yılmaz ( Ev Adresi )' },
        { key: '2', value: 'Ahmet Yılmaz ( İş yeri )' },
        { key: '3', value: 'Cüneyt Yılmaz (Kardeşinin Evi )' },
        { key: '4', value: 'Ahmet Yılmaz ( Ev Adresi )' },
        { key: '5', value: 'Ahmet Yılmaz ( İş yeri )' },
        { key: '6', value: 'Cüneyt Yılmaz (Kardeşinin Evi )' },
        { key: '7', value: 'Ahmet Yılmaz ( Ev Adresi )' },
        { key: '8', value: 'Ahmet Yılmaz ( İş yeri )' },
        { key: '9', value: 'Cüneyt Yılmaz (Kardeşinin Evi )' },
    ]

    const siparisData = [
        { key: '1', value: 'Çocuk uyuyor zili çalmayın' },
        { key: '2', value: 'Kapının önünde köpek var' },
        { key: '3', value: 'Gelmeden Arayın' },
    ]
    return (
        <ScrollView>

            <View style={{ top: 20, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Sipariş Oluştur
                </Text>
                <View style={{flexDirection:'row',top:60}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
                <View />
            </View>

            <View style={{ marginTop: 130 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flex:2}}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginLeft: 40 }}>Alım Tarihi</Text>
                        <DatePicker
                            style={{ width:Dimensions.get('screen').width / 2.1,height: 50, borderRadius: 20, fontFamily: 'Poppins', marginTop: 10 }}
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
                                    left: 40,
                                    top: 4,
                                    marginLeft: 0,

                                },
                                dateText: {
                                    fontFamily: 'Poppins',
                                    color: '#9A9A9A',
                                    fontSize: 15
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderRadius: 10,
                                    height: 50,
                                    backgroundColor: '#FFF'
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => setDate(date)}
                        />
                    </View>
                    <View style={{width:15}}/>
                    <View style={{flex:2}}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16 }}>Teslim Tarihi</Text>
                        <DatePicker
                            style={{ width:Dimensions.get('screen').width / 2.1,height: 50, borderRadius: 20, fontFamily: 'Poppins', left: -40, marginTop: 10 }}
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
                                    left: 40,
                                    top: 4,
                                    marginLeft: 0,

                                },
                                dateText: {
                                    fontFamily: 'Poppins',
                                    color: '#9A9A9A',
                                    fontSize: 15
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderRadius: 10,
                                    height: 50,
                                    backgroundColor: '#FFF',
                                
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => setDate(date)}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 30,marginRight:40 }}>
                    <View style={{ flex:2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins',fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Alacak Araç</Text>
                        <SelectList
                            setSelected={(val) => setGrup(val)}
                            data={grupdata}
                            save="value"
                            placeholder='Alacak Aracı Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 99,  color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: '34 VD 11' }}
                            dropdownStyles={{ zIndex: 99, position: 'absolute',width:Dimensions.get('screen').width / 2.35, backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                    <View style={{width:15}}/>
                    <View style={{ flex:2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, paddingBottom: 10 }}>Alacak Personel</Text>
                        <SelectList
                            setSelected={(val) => setGrup(val)}
                            data={cinsiyetdata}
                            save="value"
                            placeholder='Alacak Personeli Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 99,  color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'Mehmet Yılmaz' }}
                            dropdownStyles={{ zIndex: 99, position: 'absolute', width:Dimensions.get('screen').width / 2.35,backgroundColor: '#FFFFFF', marginTop: 60, left: 5 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 50, marginLeft: 30 }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16}}>Kayıtlı Adreslerim</Text>
                    <SelectList
                        setSelected={(val) => setGrup(val)}
                        data={adresData}
                        save="value"
                        placeholder='Adres Seçin'
                        maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                        fontFamily="Poppins"
                        boxStyles={{ zIndex: 95, width: Dimensions.get('screen').width - 70, color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                        dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                        inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        searchPlaceholder="Ara"
                        defaultOption={{ key: '1', value: 'Ahmet Yılmaz ( Ev Adresi )' }}
                        dropdownStyles={{ zIndex: 95, position: 'absolute', width: Dimensions.get('screen').width - 80, backgroundColor: '#FFFFFF', marginTop: 60,marginRight:40 }}
                    />
                </View>
                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, marginTop: 50, marginLeft: 25, borderRadius: 20 }}>
                    <View>

                        <Image source={require('../assets/defaultAddress.png')} style={{ position: 'absolute', width: 30, height: 30, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} /><Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#808080', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Ahmet Yılmaz</Text>
                    </View>
                    <Text style={{ marginLeft: 50, top: -10, fontFamily: 'Poppins', height: 40, color: '#C0BABA', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Açıklama: Babası</Text>
                    <Text style={{ marginLeft: 50, top: -20, fontFamily: 'Poppins', height: 40, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                    <View style={{ width: Dimensions.get('screen').width - 130, marginLeft: 25, backgroundColor: '#FFDEDE', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40, borderColor: '#FF0606', height: Dimensions.get('screen').width > 500 ? 30 : 25 }}>
                        <View style={styles.notebar}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', top: Dimensions.get('screen').width > 500 ? 0 : 0 }}>Not:</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', color: '#FF0606', fontSize: Dimensions.get('screen').width > 500 ? 18 : 12, fontFamily: 'Poppins', left: 30, top: Dimensions.get('screen').width > 500 ? 0 : 2 }}>Bahçede Köpek var</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#808080', fontFamily: 'Poppins' ,fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, marginTop: 30, marginLeft: 10 }}>Teslimat Adresi Aynı</Text>
                        <Pressable style={{ width: 70, backgroundColor: '#DCDCDC', height: Dimensions.get('screen').width > 500 ? 40 : 30, marginTop: 22, marginLeft: 10, borderRadius: 5 }}><Text style={{ color: '#FFF', fontFamily: 'Poppins',  fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, marginTop: 5, textAlign: 'center' }}>Evet</Text></Pressable>
                        <View style={{ width: 2 }} />
                        <Pressable style={{ width: 70, backgroundColor: '#3DBC88', height: Dimensions.get('screen').width > 500 ? 40 : 30, marginTop: 22, marginLeft: 10, borderRadius: 5 }}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, marginTop: 5, textAlign: 'center' }}>Hayır</Text></Pressable>

                    </View>
                    <View style={{height:20}}/>
                </View>
                <View style={{ marginTop: 40, marginLeft: 20 }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sipariş Notu</Text>
                    <SelectList
                        setSelected={(val) => setGrup(val)}
                        data={siparisData}
                        save="value"
                        placeholder='Adres Seçin'
                        maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                        fontFamily="Poppins"
                        boxStyles={{ zIndex: 95, width: Dimensions.get('screen').width - 40, color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                        dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                        inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                        searchPlaceholder="Ara"
                        defaultOption={{ key: '1', value: 'Ahmet Yılmaz ( Ev Adresi )' }}
                        dropdownStyles={{ zIndex: 95, position: 'absolute', width: Dimensions.get('screen').width - 40, backgroundColor: '#FFFFFF', marginTop: 60 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: 20,marginRight:20 }}>
                    <View style={{flex:2}}>
                        <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20,height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                    </View>
                    <View style={{ width: 15 }} />
                    <View style={{flex:2}}>
                        <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} >Kaydet</Text></Pressable>
                    </View>
                </View>

                <View style={{ height: 80 }} />
            </View>
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
        height: Dimensions.get('screen').width > 500 ? 30 : 22,
        borderRadius: 30,
        left: -1,
    },
})
export default SiparisEkle