import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'


const MusteriProfil = () => {
    const [display, setDisplay] = useState('none')
    const navigation = useNavigation()
    const [grup, setGrup] = useState('')
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
    const [pressed, setPressed] = useState(false)
    const menuOpen = () => {
        if (pressed === false) {
            setPressed(true)
            setDisplay('flex')
        }
        else {
            setPressed(false)
            setDisplay('none')
        }

    }
    return (
        <View>

            <View style={{ top: 30, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Müşteri Profil
                </Text>
                <View style={{flexDirection:'row',top:50}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
                <Pressable style={{ right: 20, position: 'absolute', backgroundColor: '#d6d6d6', width: 50, height: 50, marginTop: 120, borderRadius: 10,zIndex:99 }} onPress={() => menuOpen()}>
                    <Image source={require('../assets/3bar.png')} style={{ top: 15, left: 15, width: 20, height: 20,zIndex:95 }} />
                </Pressable>
                <View style={{ display: display, backgroundColor: '#FFFFFF', position: 'absolute', right: 60, height: 490, zIndex: 99, width: 200, marginTop: 170, borderRadius: 10, elevation: 6, flex: 1 }}>
                    <Pressable style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('MusteriProfil')}>
                        <Image source={require('../assets/profil.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Profil</Text>
                    </Pressable>

                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/fatura.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Faturalar</Text>
                    </Pressable>

                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }} onPress={() => navigation.navigate('EskiSiparisler')}>
                        <Image source={require('../assets/siparisler.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Siparişler</Text>
                    </Pressable>

                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/smsgecmis.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Sms Geçmişi</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }} onPress={() => navigation.navigate('AdresListesi')}>
                        <Image source={require('../assets/adreslistesi.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Adres Listesi</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}  onPress={() => navigation.navigate('TelefonListesi')}>
                        <Image source={require('../assets/telefonlistesi.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Telefon Listesi</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/cariislemler.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Cari İslemler</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/cagrigecmisi.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Çağrı Geçmişi</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/logkayitlari.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Log Kayıtları</Text>
                    </Pressable>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Image source={require('../assets/ayarlar.png')} style={{ width: 30, height: 30, top: 5 }} />
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins', color: '#C3C3C3' }}>Ayarlar</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={{ top: 120, left: 0, position: 'absolute' }}>
                    <Text style={{ fontFamily: 'Poppins', color: '#C0BEBE', left: 20 }}>Müşteri</Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252', left: 20 }}>Mehmet Yılmaz</Text>
                    <View style={{ backgroundColor: '#EAEAEA', height: 2, width: Dimensions.get('screen').width, top: 10 }} />
                </View>
                <ScrollView style={{ marginTop: 200, marginLeft: 10, backgroundColor: '#e6e3e3', width: Dimensions.get('screen').width - 20, borderRadius: 10, paddingLeft: 20 }}>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Telefon Numarası</Text>
                        <View style={{ backgroundColor: '#FFFFFF', height: 60, width: Dimensions.get('screen').width - 60, marginTop: 10, borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#696969', fontFamily: 'Poppins', fontSize: 16, top: 20, left: 20 }}>0532 345 67 89</Text>
                            <Pressable style={{ backgroundColor: '#203A4B', width: 30, height: 30, borderRadius: 30, top: 15, right: 5, position: 'absolute' }}><Image /></Pressable>
                            <Pressable style={{ backgroundColor: '#25D366', width: 30, height: 30, borderRadius: 30, top: 15, right: 40, position: 'absolute' }}><Image source={require('../assets/whatsapp.png')} style={{ width: 30, top: 0, left: 0, height: 30, resizeMode: 'contain' }} /></Pressable>
                            <Pressable style={{ backgroundColor: '#FECB10', width: 30, height: 30, borderRadius: 30, top: 15, right: 75, position: 'absolute' }}><Image source={require('../assets/sms.png')} style={{ width: 30, top: 0, left: 0, height: 30, resizeMode: 'contain' }} /></Pressable>
                            <Pressable style={{ backgroundColor: '#F28243', width: 30, height: 30, borderRadius: 30, top: 15, right: 110, position: 'absolute' }}><Image source={require('../assets/call.png')} style={{ width: 30, top: 0, left: -2, height: 30, resizeMode: 'contain' }} /></Pressable>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Adres</Text>
                        <View style={{ backgroundColor: '#FFFFFF', height: 100, width: Dimensions.get('screen').width - 60, marginTop: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#696969', fontFamily: 'Poppins', fontSize: 14, top: 27, left: 20, width: Dimensions.get('screen').width - 100 }}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20,marginLeft:0,marginRight:20 }}>
                        <View style={{flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Borç Bilgisi</Text>
                            <TextInput editable={false} value="25 TL" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, height: 50, borderRadius: 10, }} />
                        </View>
                        <View style={{ width: 10 }} />
                        <View style={{flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Toplam Ciro</Text>
                            <TextInput editable={false} value="2500 TL" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, height: 50, borderRadius: 10, }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20,marginRight:20 }}>
                        <View style={{flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Müşteri Grubu</Text>
                            <SelectList
                                setSelected={(val) => setGrup(val)}
                                data={grupdata}
                                save="value"
                                placeholder='Grup Seçin'
                                maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                                fontFamily="Poppins"
                                boxStyles={{ zIndex: 99, color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
                                dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                                inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                searchPlaceholder="Ara"
                                defaultOption={{ key: '1', value: 'Bireysel' }}
                                dropdownStyles={{ zIndex: 99, position: 'absolute',backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                            />
                        </View>
                        <View style={{ width: 10 }} />
                        <View style={{flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Cinsiyet</Text>
                            <SelectList
                                setSelected={(val) => setGrup(val)}
                                data={cinsiyetdata}
                                save="value"
                                placeholder='Cinsiyet Seçin'
                                maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                                fontFamily="Poppins"
                                boxStyles={{ zIndex: 99, color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
                                dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                                inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                searchPlaceholder="Ara"
                                defaultOption={{ key: '1', value: 'Erkek' }}
                                dropdownStyles={{ zIndex: 99, position: 'absolute', width: Dimensions.get('screen').width / 2.45, backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20,marginRight:20 }}>
                        <View style={{flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>İndirim Grubu</Text>
                            <SelectList
                                setSelected={(val) => setGrup(val)}
                                data={indirimdata}
                                save="value"
                                placeholder='Indirim Grubu Seçin'
                                maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                                fontFamily="Poppins"
                                boxStyles={{ zIndex: 98, color: '#808080', height: 50, backgroundColor: '#FFF', borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
                                dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                                inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                                searchPlaceholder="Ara"
                                defaultOption={{ key: '1', value: '%10' }}
                                dropdownStyles={{ zIndex: 98, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60, zIndex: 99 }}
                            />
                        </View>
                        <View style={{ width: 10 }} />
                        <View style={{zIndex:97,flex:2}}>
                            <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Dogum Tarihi</Text>
                            <TextInput value="12.08.1988" placeholder='Fiyat Bilgisi Girin' keyboardType='number-pad' style={{ backgroundColor: '#FFFFFF', fontFamily: 'Poppins', color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, paddingLeft: 20, paddingRight: 20, height: 50, borderRadius: 10, }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 30,zIndex:97 }}>
                        <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 16 }}>Müşteri Notu</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Not Yazın' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 60, height: 100, borderRadius: 10, backgroundColor: '#FFFFFF' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 40,zIndex:96,marginRight:20 }}>
                        <View style={{ backgroundColor: '#FFFFFF',flex:2, height: 70, borderRadius: 10 }}>
                            <Pressable style={{ width: 50, height: 50, backgroundColor: '#0CBDDE', borderRadius: 30, marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                                <Image style={{ width: 30, top: 10, marginLeft: 10, height: 30, resizeMode: 'contain' }} source={require('../assets/marker.png')} />
                                <View><Text style={{ width: Dimensions.get('screen').width > 500 ? Dimensions.get('screen').width / 2.7 : 100, fontFamily: 'Poppins', color: '#696969', marginLeft: 0,textAlign:'center' }}>Konuma</Text><Text style={{  width: Dimensions.get('screen').width > 500 ? Dimensions.get('screen').width / 2.7 : 100,fontFamily: 'Poppins', color: '#696969', marginTop: 0, marginLeft: 0, textAlign: 'center' }}>Git</Text></View>
                            </Pressable>
                        </View>
                        <View style={{ width: 10,zIndex:95 }} />
                        <View style={{ backgroundColor: '#FFFFFF', flex:2, height: 70, borderRadius: 10 }}>
                            <Pressable style={{ width: 50, height: 50, backgroundColor: '#0CBDDE', borderRadius: 30, marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                                <Image style={{ width: 50, top: 0, left: 0, height: 50, resizeMode: 'contain' }} source={require('../assets/rerollWhite.png')} />
                                <View><Text style={{ width: Dimensions.get('screen').width > 500 ? Dimensions.get('screen').width / 2.7 : 100, fontFamily: 'Poppins', color: '#696969', marginLeft: 0,textAlign:'center' }}>Konumu</Text><Text style={{  width: Dimensions.get('screen').width > 500 ? Dimensions.get('screen').width / 2.7 : 100,fontFamily: 'Poppins', color: '#696969', marginTop: 0, marginLeft: 0, textAlign: 'center' }}>Güncelle</Text></View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 50,marginRight:20 }}>
                        <View style={{flex:2}}>
                            <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }}>Güncelle</Text></Pressable>
                        </View>
                        <View style={{ width: 15 }} />
                        <View style={{flex:2}}>
                            <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.navigate('SiparisEkle')}>Sipariş Ekle</Text></Pressable>
                        </View>
                    </View>
                    <View style={{ width: 200, height: 130 }} />
                </ScrollView>
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
export default MusteriProfil