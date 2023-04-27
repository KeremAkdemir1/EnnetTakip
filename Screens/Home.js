import * as React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
import I18n from 'i18n-js';
import { View, Text, StyleSheet, Dimensions, ScrollView,Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {} from 'react'
const Home = () => {
    const value = 0.66
   const navigation = useNavigation();

    return (


        <ScrollView contentContainerStyle={{ height: Dimensions.get('screen').width > 500 ? 1570 : 1400}} >
            <View style={styles.container}>
            <View style={styles.topView}>
                <View style={{flexDirection:'row',width:Dimensions.get('screen').width}}>
                <Image source={require('../assets/icon1024.png')} style={{width:100,height:100,resizeMode:'contain',position:'absolute',left:20}}/>
                <Text style={styles.topText}>
                    Ana sayfa
                </Text>
                </View>
                <View style={{flexDirection:'row',top:50}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>

            <View>
            <View style={{marginTop:110 ,left:10}}>
                <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 26 : 16,fontFamily:'Poppins-SemiBold',color:'#525252',left:5,paddingBottom:10}}>
                     {I18n.t('gununOzeti')}
                </Text>
            </View>
                <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress
                    maxValue={100}
                    value={10}
                    valueSuffix={'/80'}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#2ecc71'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Alinacak'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={100}
                    value={20}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#0CBDDE'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16   }
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Teslimat'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={100000}
                    value={80000}
                    valueSuffix={'TL'}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#FECB10'}
                    inActiveStrokeOpacity={2}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 12}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Gelir'
                />
                <View style={{ width: 8 }} />
                <CircularProgress
                    maxValue={100}
                    value={40}
                    valueSuffix={'TL'}
                    inActiveStrokeColor={'#EAE9E9'}
                    activeStrokeColor={'#67C5B5'}
                    progressValueFontSize={Dimensions.get('screen').width > 500 ? 23 : 16}
                    inActiveStrokeOpacity={2}
                    radius={Dimensions.get('screen').width > 500 ? 70 : 40}
                    title='Gider'
                />
                </View>
            </View>
            <View style={{ top: 50 }}>
            <Pressable onPress={() => navigation.navigate('TeslimAlincak')}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/teslimAlincak.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('teslimAlincaklar')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#F28243', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('YikamadaOlanlar')} style={{top:20}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/yikama.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('yikamadaOlanlar')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#0CBDDE', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('HazirListesi')} style={{top:40}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/hazir.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('hazirListesi')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#203A4B', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('TeslimEdilcekler')} style={{top:60}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/teslimEdilcek.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('teslimEdilcekler')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FECB10', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('TumOperasyonlar')} style={{top:80}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/operasyon.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('tümOperasyonlar')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#67C5B5', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('TeslimEdilenler')}style={{top:100}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/teslimEdilen.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('teslimEdilenler')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#F28243', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('IptalEdilenler')} style={{top:120}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/iptal.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('iptalEdilenler')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#0CBDDE', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Randevular')} style={{top:140}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/randevu.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('randevular')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#203A4B', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('BekleyenSiparisler')} style={{top:160}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ backgroundColor: '#F0F0F0', width: Dimensions.get('screen').width / 1.6, height: Dimensions.get('screen').width > 500 ? 80 : 70, elevation: 1, borderRadius: 10 }}>
                        <Image source={require('../assets/bekleyen.png')} style={{position:'absolute',width:35,height:35,resizeMode:'contain',top:Dimensions.get('screen').width > 500 ? 10 : 15,left:15}}/><Text style={{ fontFamily: 'Poppins', textAlign: 'center', top: Dimensions.get('screen').width > 500 ? 20 : 25, fontSize: Dimensions.get('screen').width > 750 ? 25 : 14,color:'#203A4B',left:15 }}>{I18n.t('bekleyenSiparisler')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FECB10', width: Dimensions.get('screen').width / 5, height: Dimensions.get('screen').width > 500 ? 80 : 70, left: 10, borderRadius: 10 }}>
                        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 40 : 30,textAlign:'center',top:Dimensions.get('screen').width > 750 ? 4 :  10,color:'#fff'}}>20</Text>
                    </View>
                </View>
                </Pressable>
                <View style={{top:220}}>
                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}> 
                    <Pressable style={{
                        backgroundColor: '#F28243', width: Dimensions.get('screen').width /2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,paddingBottom:20
                    }} onPress={() => navigation.navigate('MusteriCagriGecmisi')}><Text style={styles.buttonText}>{I18n.t('cagriGecmisi')}</Text>
                    </Pressable>
                    <Pressable style={{
                        backgroundColor: '#67C5B5', width: Dimensions.get('screen').width /2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,left:20,marginTop:30
                    }} onPress={() => navigation.navigate("GiderEkle")}><Text style={styles.buttonText}>{I18n.t('giderEkle')}</Text>
                    </Pressable>
                    <Pressable style={{
                        backgroundColor: '#0CBDDE', width: Dimensions.get('screen').width /2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20
                        
                    }}>
                       
                        <Text style={styles.buttonText}>{I18n.t('kasaCiro')}<Text style={{fontFamily:'Poppins-SemiBold',fontSize:12,textAlign:'right',position:'absolute',left:15}}>1.000tl</Text></Text>
                    </Pressable>
                    <Pressable style={{
                        backgroundColor: '#FECB10', width: Dimensions.get('screen').width /2 - 15, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,left:20
                    }}><Text style={styles.buttonText}>{I18n.t('rapor')}</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
            </View>
            
        </ScrollView>



    )
}

const styles = StyleSheet.create({
    buttonText:{
        color:'#FFFFFF',
        fontFamily:'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        height:50,
        textAlign:'center'
    },
    container: {
        flex: 1,
    },
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left:5
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
        top: 35,
        left:Dimensions.get('screen').width / 2.7    
    },

})
export default Home