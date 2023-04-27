import * as React from 'react';
import { ProgressBar, MD3Colors, } from 'react-native-paper';
import { useState, useEffect } from 'react'
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
import I18n from 'i18n-js';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
const Yonetici = () => {

    const navigation = useNavigation()
    const [placeHolder, setPlaceHolder] = useState('Isim Soyisim Telefon Numarası')
    const [background1, setBackground1] = useState('#FFF')
    const [background2, setBackground2] = useState('#EFEFEF')
    const [background3, setBackground3] = useState('#EFEFEF')
    const [text1, setText1] = useState('#000')
    const [text2, setText2] = useState('#000')
    const [text3, setText3] = useState('#000')
    const clickFirst = () => {
        setPlaceHolder('Isim Soyisim Telefon Numarası')
        setBackground1('#203A4B')
        setText1('#FFF')
        setText2('#000')
        setText3('#000')
        setBackground2('#EFEFEF')
        setBackground3('#EFEFEF')
    }
    const clickSecond = () => {
        setPlaceHolder('Sipariş Numarası')
        setBackground1('#EFEFEF')
        setText2('#FFF')
        setText1('#000')
        setText3('#000')
        setBackground2('#203A4B')
        setBackground3('#EFEFEF')
    }
    const clickThird = () => {
        setPlaceHolder('Adres')
        setBackground1('#EFEFEF')
        setText3('#FFF')
        setText2('#000')
        setText1('#000')
        setBackground2('#EFEFEF')
        setBackground3('#203A4B')
    }
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width }}>
                    <Image source={require('../assets/icon1024.png')} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'absolute', left: 20 }} />
                    <Text style={styles.topText}>
                        Yönetici
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', top: 50 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>


            </View>
            <ScrollView style={{marginTop:50}} contentContainerStyle={{top:-60}}>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins', color: '#C0BEBE', paddingBottom: 0, marginTop: 80, marginLeft: 20 }}>
                Günaydın
            </Text>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins-SemiBold', color: '#525252', paddingBottom: 10, marginTop: 0, marginLeft: 20 }}>
                Mehmet Yılmaz
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <CircularProgress
                    maxValue={365}
                    value={10}
                    valueSuffix={''}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#F28243'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Gün'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={24}
                    value={6}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#0CBDDE'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Saat'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={60}
                    value={41}
                    valueSuffix={''}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#FECB10'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 12}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Dakika'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={60}
                    value={30}
                    valueSuffix={''}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#67C5B5'}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    inActiveStrokeOpacity={2}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Saniye'
                />
            </View>
            <Text style={{ textAlign: 'center', marginTop: 30, fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-SemiBold', color: '#F28243', paddingBottom: 0, marginLeft: 20, marginTop: 5 }}>Günden Beri İyi ki Bizimlesiniz</Text>
            <Text style={{ marginTop: 40, marginLeft: 20, fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-Bold', color: '#525252', paddingBottom: 20 }}>
                Varlıklarım
            </Text>
            <View>
                <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width - 20, left: 10 }}>
                    <Pressable style={{ backgroundColor: background1, width: 147, height: 43, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 6, top: 0 }} onPress={() => clickFirst()}>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontFamily: 'Poppins', fontSize: 13, color: text1 }}>Özet</Text>
                    </Pressable>
                    <View style={{ width: 10 }} />
                    <Pressable style={{ backgroundColor: background2, width: 94, height: 43, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 6, top: 0 }} onPress={() => clickSecond()}>
                        <Text style={{ textAlign: 'center', marginTop: 10, color: '#6B7172', fontFamily: 'Poppins', fontSize: 13, color: text2 }}>Özellikler</Text>
                    </Pressable>
                    <View style={{ width: 10 }} />

                </View>
                <View style={{ backgroundColor: '#FFFFFF', width: Dimensions.get('screen').width - 30, left: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: 0 }}>
                    <View >
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#203A4B', fontFamily: 'Poppins', fontSize: 13 }}>Kalan Sms Kredisi</Text>
                        <View style={{ borderWidth: 1, borderColor: '#D9D9D9', width: Dimensions.get('screen').width - 65, height: 50, borderRadius: 10, marginLeft: 17, flexDirection: 'row' }}>

                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 12, marginLeft: 5 }}>152.000</Text>
                            <Progress.Bar progress={0.3} width={Dimensions.get('screen').width - 200} height={10} style={{ color: '#F28243', height: 10, marginTop: 16, marginLeft: 10 }} color={'#f28243'} />
                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 10, marginLeft: 10 }}>200.000</Text>

                        </View>
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#203A4B', fontFamily: 'Poppins', fontSize: 13 }}>Kullanıcı Sayısı</Text>
                        <View style={{ borderWidth: 1, borderColor: '#D9D9D9', width: Dimensions.get('screen').width - 65, height: 50, borderRadius: 10, marginLeft: 17, flexDirection: 'row' }}>

                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 12, marginLeft: 17,left:10 }}>4</Text>
                            <Progress.Bar progress={0.3} width={Dimensions.get('screen').width - 200} height={10} style={{ color: '#F28243', height: 10, marginTop: 16, marginLeft: 40 }} color={'#67C5B5'} />
                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 10, marginLeft: 20,left:8 }}>5</Text>

                        </View>
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#203A4B', fontFamily: 'Poppins', fontSize: 13 }}>Program Kalan Gün Sayısı</Text>
                        <View style={{ borderWidth: 1, borderColor: '#D9D9D9', width: Dimensions.get('screen').width - 65, height: 50, borderRadius: 10, marginLeft: 17, flexDirection: 'row' }}>

                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 12, marginLeft: 20 }}>180</Text>
                            <Progress.Bar progress={0.3} width={Dimensions.get('screen').width - 200} height={10} style={{ color: '#F28243', height: 10, marginTop: 16, marginLeft: 20 }} color={'#FECB10'} />
                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 10, marginLeft: 20 }}>360</Text>

                        </View>
                        <View style={{marginTop:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{marginLeft:15,color:'#D2D2D2'}}>Program Başlama Tarihi :</Text>
                            <Text style={{marginRight:15,color:'#D2D2D2'}}>01.01.2022   20:21:16</Text>
                            </View>
                            <View style={{marginTop:10}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{marginLeft:15,color:'#D2D2D2'}}>Program Bitiş Tarihi :</Text>
                            <Text style={{marginRight:15,color:'#D2D2D2'}}>01.06.2022   23:59:59</Text>
                            </View>
                        </View>
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#203A4B', fontFamily: 'Poppins', fontSize: 13 }}>Ciro</Text>
                        <View style={{ borderWidth: 1, borderColor: '#D9D9D9', width: Dimensions.get('screen').width - 65, height: 50, borderRadius: 10, marginLeft: 17, flexDirection: 'row' }}>

                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 12, marginLeft: 20 }}>500 TL</Text>
                            <Progress.Bar progress={1} width={Dimensions.get('screen').width - 200} height={10} style={{ color: '#F28243', height: 10, marginTop: 16, marginLeft: 20 }} color={'#203A4B'} />
                            

                        </View>
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#203A4B', fontFamily: 'Poppins', fontSize: 13 }}>Gider</Text>
                        <View style={{ borderWidth: 1, borderColor: '#D9D9D9', width: Dimensions.get('screen').width - 65, height: 50, borderRadius: 10, marginLeft: 17, flexDirection: 'row' }}>

                            <Text style={{ fontFamily: 'Poppins', color: '#D2D2D2', marginTop: 12, marginLeft: 20 }}>180 TL</Text>
                            <Progress.Bar progress={1} width={Dimensions.get('screen').width - 200} height={10} style={{ color: '#F28243', height: 10, marginTop: 16, marginLeft: 20 }} color={'#0CBDDE'} />
                            

                        </View>
                        <View style={{ height: 30 }} />
                    </View>

                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop:20 }}>
                <Pressable style={{
                    backgroundColor: '#F28243', width: Dimensions.get('screen').width / 2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20, paddingBottom: 20
                }} onPress={() => navigation.navigate('MusteriCagriGecmisi')}><Text style={styles.buttonText}>{I18n.t('cagriGecmisi')}</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: '#67C5B5', width: Dimensions.get('screen').width / 2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20, left: 20, marginTop: 30
                }} onPress={() => navigation.navigate("GiderEkle")}><Text style={styles.buttonText}>{I18n.t('giderEkle')}</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: '#0CBDDE', width: Dimensions.get('screen').width / 2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20

                }}>

                    <Text style={styles.buttonText}>{I18n.t('kasaCiro')}</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: '#FECB10', width: Dimensions.get('screen').width / 2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20, left: 20
                }}><Text style={styles.buttonText}>{I18n.t('rapor')}</Text>
                </Pressable>
            </View>
            <View style={{height:200}}/>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        top: 35,
        left: Dimensions.get('screen').width / 2.5
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        height: 50,
        textAlign: 'center'
    },
})
export default Yonetici