import { useNavigation } from "@react-navigation/native"
import { Animated, View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState, useEffect, useRef } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import AnimatedHideView from 'react-native-animated-hide-view';
const MusteriEkle21 = () => {

    const [il, setIl] = useState('')
    const [ilce, setIlce] = useState('')
    const navigation = useNavigation()
    const [show, setShow] = useState(false)
    const [height,setHeight] = useState(false)
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
    const hideContent = () => {
        async function prepare() {
            setShow(false)
            await new Promise(resolve => setInterval(resolve, 1000));
            setHeight(false)
        }
        prepare();
    }
    const showContent = () => {
        setShow(true)
        setHeight(true)
    }
    return (
        <ScrollView>
            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center'
                }}>
                    Müşteri Ekle
                </Text>
                <View style={{flexDirection:'row',top:20}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{ marginLeft: 25 }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, marginLeft: 0, paddingBottom: 20, textAlign: 'left', marginTop: 30 }}>Teslim Edilecek Adres</Text>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>İl</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
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
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>İlçe</Text>
                        <SelectList
                            setSelected={(val) => setIlce(val)}
                            data={ilceData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'Ataşehir' }}
                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Mahalle</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
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
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Cadde</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sokak Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sokak Numarası</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Bina & Site Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Bina & Site Blok</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Kat</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Daire</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Adres Açıklama (Adres Tarifi)</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Not Yazın' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 60, height: 100, borderRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ flexDirection: 'row', backgroundColor: '#d1cfcf', width: Dimensions.get('screen').width - 50, borderRadius: 10, height: 60 }}>
                    <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 15, marginTop: 18, marginLeft: 10 }}>Fatura Adresi Aynı</Text>
                    <View style={{position:'absolute',right:15,flexDirection:'row'}}>
                    <Pressable style={{ width: 70, backgroundColor: '#3DBC88', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} onPress={() => hideContent()}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>Evet</Text></Pressable>
                    <View style={{ width: 2 }} />
                    <Pressable style={{ width: 70, backgroundColor: '#DCDCDC', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} onPress={() => showContent()}><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>Hayır</Text></Pressable>
                    </View>
                </View>
                <AnimatedHideView visible={show} style={{marginTop:30,height:height === false ? 0 : 'auto'}}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, marginLeft: 0, paddingBottom: 10, textAlign: 'left', marginTop: 0 }}>Fatura Adresi</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>İl</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
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
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>İlçe</Text>
                        <SelectList
                            setSelected={(val) => setIlce(val)}
                            data={ilceData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}
                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, color: '#808080' }}
                            searchPlaceholder="Ara"
                            defaultOption={{ key: '1', value: 'Ataşehir' }}
                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 2.5, position: 'absolute', backgroundColor: '#FFFFFF', marginTop: 60 }}
                        />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Mahalle</Text>
                        <SelectList
                            setSelected={(val) => setIl(val)}
                            data={ilData}
                            save="value"
                            placeholder='Adres Seçin'
                            maxHeight={Dimensions.get('screen').width > 500 ? 200 : 150}
                            fontFamily="Poppins"
                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC' }}
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
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Cadde</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sokak Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sokak Numarası</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Bina & Site Adı</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Bina & Site Blok</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Kat</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Daire</Text>
                        <TextInput style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Adres Açıklama (Adres Tarifi)</Text>
                        <TextInput textAlignVertical='top' multiline={true} placeholder='Not Yazın' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left', paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 60, height: 100, borderRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
                    </View>
                </View>
                <View style={{ height: 20 }} />
                </AnimatedHideView>
                <View>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#525252', fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, marginLeft: 0, paddingBottom: 20, textAlign: 'left', marginTop: 30 }}>Şirket Bilgileri</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Şirket Adı</Text>
                        <TextInput placeholder="Ünvan" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                    <View style={{width:20}}/>
                </View>
                <View style={{height:20}}/>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Vergi Dairesi</Text>
                        <TextInput placeholder="Pendik" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Vergi No veya TC</Text>
                        <TextInput placeholder="44898564001" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{height:20}}/>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Mersis No</Text>
                        <TextInput placeholder="3485-1245-1475-1569" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />

                    </View>
                    <View style={{ width: 50 }} />
                    <View style={{ flex: 2, right: 30 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>Sicil No</Text>
                        <TextInput placeholder="101548" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                </View>
                <View style={{height:20}}/>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: '#203A4B', fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10 }}>E-posta Adresi</Text>
                        <TextInput placeholder="destek@ennettakip.com.tr" style={{ borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                    </View>
                    <View style={{width:20}}/>
                </View>

                <View style={{height:20}}/>
                <View style={{ flexDirection: 'row', backgroundColor: '#d1cfcf', width: Dimensions.get('screen').width - 50, borderRadius: 10, height: 60 }}>
                    
                    <Text style={{ color: '#808080', fontFamily: 'Poppins', fontSize: 15, marginTop: 18, marginLeft: 10 }}>Fatura Türü</Text>
                    <View style={{position:'absolute',right:15,flexDirection:'row'}}>
                    <Pressable style={{ width: 70, backgroundColor: '#3DBC88', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} ><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>e-arşiv</Text></Pressable>
                    <View style={{ width: 2 }} />
                    <Pressable style={{ width: 70, backgroundColor: '#DCDCDC', height: 30, marginTop: 15, marginLeft: 10, borderRadius: 5 }} ><Text style={{ color: '#FFF', fontFamily: 'Poppins', fontSize: 14, marginTop: 5, textAlign: 'center' }}>e-fatura</Text></Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 20 }}>
                    <View>
                        <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>İptal</Text></Pressable>
                    </View>
                    <View style={{ width: 15 }} />
                    <View>
                        <Pressable style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: Dimensions.get('screen').width / 2.35, height: 50 }} onPress={() => navigation.navigate('MusteriEkle2')}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: 13 }} >İleri</Text></Pressable>
                    </View>
                </View>
            <View style={{ height: 50 }} />
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
})

export default MusteriEkle21