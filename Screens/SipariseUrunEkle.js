import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Table, Row, Rows } from 'react-native-table-component';
const SipariseUrunEkle = () => {
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState("01.01.2023");
    const [display, setDisplay] = useState('flex')
    const [musteri, setMusteri] = useState('')
    const [grup, setGrup] = useState('')
    const navigation = useNavigation()

    const grupdata = [
        { key: '1', value: 'Bireysel' },
        { key: '2', value: 'Kurumsal' }
    ]
    const cinsiyetdata = [
        { key: '1', value: 'Erkek' },
        { key: '2', value: 'Kadın' }
    ]
    const indirimdata = [
        { key: '1', value: 'Makine Halısı' },
        { key: '2', value: 'Tüy Halı' },
        { key: '3', value: 'Yastık' },
        { key: '4', value: 'İpek Halı' },
        { key: '5', value: 'Step Halı' },
        { key: '6', value: 'Battaniye' },
        { key: '7', value: 'Yorgan' },
        { key: '8', value: 'Takım Elbise' },
    ]
    const tableHead = ['Ürün Adı', '', '', 'Tutar']
    const tableData = [
        ['Makine Halısı', '1 Adet', '6m²', '150.00TL'],
        ['Stor Perde', '1 Adet', '7.3m²', '150.00TL'],
        ['Battaniye', '2 Adet', '0', '200.00TL'],

    ]
    const toplamData = [
        ['TOPLAM:', '4', '13.3', '410.00TL'],
    ]
    return (
        <ScrollView>


            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-20
                }}>
                    Siparişe Ürün Ekleme
                </Text>
                <View style={{flexDirection:'row',top:0}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{ marginTop: 30,justifyContent:'center' }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, marginTop: 10, marginLeft: 10 }}>Ürün Seç</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 1 }}>
                        <SelectList
                            setSelected={(val) => setGrup(val)}
                            data={indirimdata}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', marginRight: 10, right: 10 }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'Makine Halısı' }}
                            dropdownStyles={{ zIndex: 99, width: Dimensions.get('screen').width / 1.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 10 }}>En:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" placeholder="En" style={{  fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 40 }} />

                    </View>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 30 }}>Boy:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" placeholder="Boy" style={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 40, right: 20 }} />

                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 10 }}>m²:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" placeholder="m²" style={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 40 }} />

                    </View>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 30 }}>Fiyat</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput focusable={false} editable={false} textAlign="center" placeholder="Boy" style={{fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, backgroundColor: '#CCCCCC', borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 40, right: 20 }} />

                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 10 }}>Adet:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" placeholder="1" style={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14,borderTopWidth: 2, right: 5, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 30 }} />

                    </View>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 30 }}>Tarih</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput focusable={false} editable={false} textAlign="center" placeholder="17.01.2023" style={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 11,borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, backgroundColor: '#CCCCCC', borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginLeft: 30, right: 20 }} />

                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, marginTop: 10, marginLeft: 10 }}>Ürün Notu:</Text>
                    <View style={{ width: 30 }} />
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" placeholder="4 kenarı overlok olacak." style={{fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, borderTopWidth: 2, right: 5, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A', marginRight: 30, marginLeft: 0 }} />

                    </View>
                </View>
                <View style={{ height: 30 }} />
                <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 45, marginRight: 20, marginLeft: 20}}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins',fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ?8 : 12 }}>Ekle</Text></Pressable>
                <View style={{ height: 30 }} />
                <View style={{ width: Dimensions.get('screen').width - 50, marginLeft: 20, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: '', borderRadius: 10, borderColor: '#FFF' }}>
                    <Table>
                        <Row data={tableHead} style={styles.header} textStyle={styles.text} />
                        <Rows data={tableData} textStyle={styles.datatext} />
                        <Text style={{ color: '#F28243', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 18 : 14, marginTop: 10, marginLeft: 10 }}>Not: Kenarları overlok olacak.</Text>
                        <Rows data={toplamData} textStyle={styles.toplamText} />
                    </Table>
                </View>
                <View style={{ height: 30 }} />
                <View>
                    <View style={{ flex: 2, alignSelf:'center' }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sipariş Notu:</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Mümkün olan en kısa zamanda teslimat istiyor.' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 45, height: 100, borderRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
                    </View>
                </View>
                <View style={{ marginTop: 40, backgroundColor: '#FFF', width: Dimensions.get('screen').width - 60, alignSelf:'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 415, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#0CBDDE', height: 40, width: Dimensions.get('screen').width - 60 }}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 16, marginTop: 7, marginLeft: 10 }}>Tutar Bilgisi</Text></View>
                    <View style={{ marginTop: 15, backgroundColor: '#DBD9D9', height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>Ara Toplam</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>510.00TL</Text></View>
                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>Vergi KDV(%1)</Text><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>91.80TL</Text></View>
                    <View style={{ top: -3, backgroundColor: '#DBD9D9', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>Ana Toplam</Text><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>601.80TL</Text></View>
                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>İndirim TL</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>1.80TL</Text></View>
                    <View style={{ top: -3, backgroundColor: '#DBD9D9', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>İndirim %</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>%2</Text></View>
                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>Alınan Ödeme</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>600.00TL</Text></View>
                    <View style={{ top: -3, backgroundColor: '#DBD9D9', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20 }}>Beklenen Bakiye</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>00.00TL</Text></View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30,justifyContent:'center' }}>
                                    <View>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 120, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15 ,textAlign: 'center', marginTop: 13 }}>Kaydet</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 120, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, textAlign: 'center', marginTop: 13 }}>Yazdır</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 90, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 19 : 15, textAlign: 'center', marginTop: 13 }} onPress={() => navigation.navigate('SiparisEkle')}>Vazgeç</Text></Pressable>
                                    </View>
                                </View>
            </View>

            <View style={{ height: 100 }} />
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
    header: { height: 50, backgroundColor: '#D9D9D9', fontFamily: 'Poppins', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    text: { fontFamily: 'Poppins', marginLeft: 60, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 },
    datatext: { fontFamily: 'Poppins', color: '#A6A6A6', marginTop: 15, textAlign: 'center',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 },
    toplamText: { fontFamily: 'Poppins-SemiBold', color: '#F28243', marginTop: 35, textAlign: 'center', top: -15,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }
})
export default SipariseUrunEkle