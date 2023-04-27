import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, ScrollView, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';

const EskiSiparisler = () => {
    const navigation = useNavigation()
    const tableHead = ['Ürün Adı', '', '', 'Tutar']
    const tableData = [
        ['Makine Halısı', '1', '6m²', '150.00TL'],
        ['Stor Perde', '1', '7.3m²', '150.00TL'],
        ['Battaniye', '2', '0', '200.00TL'],

    ]
    const toplamData = [
        ['TOPLAM:', '4', '13.3', '410.00TL'],
    ]
    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')

    return (
        <View>

            <View style={{ top: 30, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Eski Siparişler
                </Text>
                <View style={{flexDirection:'row',top:40}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{ marginTop: 160, left: 0, position: 'absolute' }}>
                <Text style={{ fontFamily: 'Poppins', color: '#C0BEBE', left: 20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Müşteri</Text>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252', left: 20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Mehmet Yılmaz</Text>
                <View style={{ backgroundColor: '#EAEAEA', height: 2, width: Dimensions.get('screen').width, top: 10 }} />
            </View>
            <ScrollView style={{ marginTop: 210 }}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader style={{ height: 140, backgroundColor: '#e6e3e3', borderRadius: 20, width: Dimensions.get('screen').width - 30, left: 15, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: display1 === 'flex' ? '#67C5B5' : '#D7D7D7' }}>
                        <View style={{ display: display1 }}>
                            <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'Poppins-SemiBold', height: 40, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12 }}>Sipariş No: <Text style={{ fontFamily: 'Poppins', color: '#696969',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12, left: 20 }}>      12</Text></Text>
                            <Text style={{ marginLeft: 0, marginTop: 18, fontFamily: 'Poppins-SemiBold', height: 40, position: 'absolute', right: 20, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12 }}>Sipariş Tarihi: <Text style={{ fontFamily: 'Poppins', color: '#696969',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12 }}> 14.01.2023</Text></Text>

                            <View style={{ flexDirection: 'row', backgroundColor: '#67C5B5', height: 45, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginTop: 40 }}>
                                <Text style={{ color: '#FFF', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16, marginTop: 10, marginLeft: 10, fontWeight: '600' }}>Toplam:</Text>
                                <Text style={{ position: 'absolute', right: 20, color: '#FFF', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16, marginTop: 10, marginLeft: 10, fontWeight: '600' }}>10 adet 12m2:</Text>
                            </View>
                            <Text style={{ marginLeft: 20, top: -90, fontFamily: 'Poppins-SemiBold', height: 40, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12}}>Alınan Ödeme: <Text style={{ fontFamily: 'Poppins', color: '#3DBC88',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12, left: 20 }}>150.00TL</Text></Text>
                            <Text style={{ marginLeft: 0, marginTop: 50, fontFamily: 'Poppins-SemiBold', height: 40, position: 'absolute', right: 20, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12 }}>Beklenen Bakiye: <Text style={{ fontFamily: 'Poppins', color: '#3DBC88',fontSize:Dimensions.get('screen').width > 500 ? 16 : 12 }}> 0.00TL</Text></Text>
                        </View>
                        <View style={{ backgroundColor: '#F28243', marginTop: 10, width: Dimensions.get('screen').width - 50, marginLeft: 5, height: 40, borderTopLeftRadius: 7, borderTopRightRadius: 7, display: display1 === 'flex' ? 'none' : 'flex' }}>
                            <Text style={{ color: '#FFF', fontFamily: 'Poppins', textAlign: 'left', marginLeft: 30, marginTop: 10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Ürün Fiyat ve Adet Bilgisi</Text>

                        </View>
                    </CollapseHeader>
                    <CollapseBody style={{ backgroundColor: '#e6e3e3', borderRadius: 20, top: -70, width: Dimensions.get('screen').width - 30, left: 15 }}>
                        <View style={{ width: Dimensions.get('screen').width - 50, left: 10, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: '', borderRadius: 10, borderColor: '#FFF' }}>
                            <Table>
                                <Row data={tableHead} style={styles.header} textStyle={styles.text} />
                                <Rows data={tableData} textStyle={styles.datatext} />
                                <Rows data={toplamData} textStyle={styles.toplamText} />
                            </Table>
                        </View>
                        <View>
                            <View>
                                <View style={{ flexDirection: 'row', marginTop: 60, marginLeft: Dimensions.get('screen').width / 7 }}>
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Sipariş No</Text>
                                        <TextInput editable={false} value="14" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                    <View style={{ width: 20 }} />
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16}}>Sipariş Tarihi</Text>
                                        <TextInput editable={false} value="14.01.2023" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: Dimensions.get('screen').width / 7 }}>
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Alım Tarihi</Text>
                                        <TextInput editable={false} value="14.01.2023" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                    <View style={{ width: 20 }} />
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Teslim Tarihi</Text>
                                        <TextInput editable={false} value="14.01.2023" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: Dimensions.get('screen').width / 7 }}>
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Teslim Alan</Text>
                                        <TextInput multiline={true} editable={false} value="Mehmet Yılmaz" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                    <View style={{ width: 20 }} />
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Teslim Alan</Text>
                                        <TextInput editable={false} value="34 VD 11" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: Dimensions.get('screen').width / 7 }}>
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Teslim Eden</Text>
                                        <TextInput multiline={true} editable={false} value="Mehmet Yılmaz" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                    <View style={{ width: 20 }} />
                                    <View>
                                        <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16 }}>Teslim Eden</Text>
                                        <TextInput editable={false} value="34 VD 11" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width / 3.45, height: 60, borderRadius: 10, elevation: 3 }} />
                                    </View>
                                </View>

                                <View style={{ marginTop: 70, width: Dimensions.get('screen').width - 100, left: 25, backgroundColor: '#FFDEDE', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40, borderColor: '#FF0606', height: Dimensions.get('screen').width > 500 ? 30 : 25 }}>
                                    <Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16, position: 'absolute', top: -40 }}>Sipariş Notu</Text>
                                    <View style={styles.notebar}>
                                        <Text style={{ textAlign: 'center', color: '#fff',fontSize:Dimensions.get('screen').width > 500 ? 18 : 16, fontFamily: 'Poppins', top: Dimensions.get('screen').width > 500 ? 0 : 0 }}>Not:</Text>
                                    </View>
                                    <View>
                                        <Text style={{ textAlign: 'center', color: '#FF0606', fontSize: Dimensions.get('screen').width > 500 ? 18 : 12, fontFamily: 'Poppins', left: 30, top: Dimensions.get('screen').width > 500 ? 0 : 2 }}>Gitmeden 20 dk önce arancak</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 40, backgroundColor: '#FFF', width: Dimensions.get('screen').width - 60, marginLeft: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 415, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#0CBDDE', height: 40, width: Dimensions.get('screen').width - 60 }}><Text style={{ color: '#FFF', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 21 : 15, marginTop: 7, marginLeft: 10 }}>Tutar Bilgisi</Text></View>
                                    <View style={{ marginTop: 15, backgroundColor: '#DBD9D9', height: 50, borderTopLeftRadius: 15, borderTopRightRadius: 15, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>Ara Toplam</Text><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>510.00TL</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>Vergi KDV(%1)</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>91.80TL</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#DBD9D9', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>Ana Toplam</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>601.80TL</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>İndirim TL</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>1.80TL</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#DBD9D9', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>İndirim %</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>%2</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#F3F2F2', height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>Alınan Ödeme</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>600.00TL</Text></View>
                                    <View style={{ top: -3, backgroundColor: '#DBD9D9', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, height: 50, width: Dimensions.get('screen').width - 80, left: 10, flexDirection: 'row' }}><Text style={{ color: '#808080', fontFamily: 'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20 }}>Beklenen Bakiye</Text><Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 20 : 15, marginTop: 13, marginLeft: 20, right: 20, position: 'absolute' }}>00.00TL</Text></View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 30,marginLeft:20,marginRight:20,paddingBottom:20 }}>
                                    <View style={{flex:1}}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 12 : 8 }}>Sipariş Hareketleri</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View  style={{flex:1}}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 12 : 8 }}>Sipariş Görselleri</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View  style={{flex:1}}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize:Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 12 : 16 }} onPress={() => navigation.navigate('SiparisEkle')}>Sipariş Ekle</Text></Pressable>
                                    </View>
                                </View>
                               
                            </View>
                            
                        </View>
                        
                    </CollapseBody>
                </Collapse>
                <View style={{height:20}}/>
                <View style={{height:120}}/>
            </ScrollView>
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
        height: Dimensions.get('screen').width > 500 ? 30 : 22,
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
    header: { height: 50, backgroundColor: '#D9D9D9', fontFamily: 'Poppins', borderTopLeftRadius: 10, borderTopRightRadius: 10,paddingLeft:Dimensions.get('screen').width > 500 ? 30 : 0 },
    text: { fontFamily: 'Poppins', marginLeft: 40, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 },
    datatext: { fontFamily: 'Poppins', color: '#A6A6A6', marginTop: 15, textAlign: 'center',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 },
    toplamText: { fontFamily: 'Poppins-SemiBold', color: '#F28243', marginTop: 35, textAlign: 'center', top: -15,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }
})
export default EskiSiparisler