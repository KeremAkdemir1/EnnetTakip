

import * as React from 'react';
import { ProgressBar, MD3Colors, } from 'react-native-paper';
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
import I18n from 'i18n-js';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const CariIslem = () => {


    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width }}>
                    <Text style={styles.topText}>
                        SMS Geçmişi
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
            <Text style={{paddingBottom:0,textAlign:'center',fontFamily:'Poppins-Bold',color:'#525252',fontSize:22,marginTop:85}}>Cari İşlem Listesi</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{top:0}}>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins', color: '#C0BEBE', paddingBottom: 0, marginTop: 30, marginLeft: 20 }}>
                Cari,
            </Text>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins-SemiBold', color: '#525252', paddingBottom: 10, marginTop: 0, marginLeft: 20 }}>
                Mehmet Yılmaz
            </Text>
            </View>
            </View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,backgroundColor:'#F28243',height:50,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <Text style={{marginLeft:20,marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sip No</Text>
                    <Text style={{marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Müşteri Adı</Text>
                    <Text style={{marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tutar</Text>
                    <Text style={{marginRight:20,marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Ödeme Türü</Text>
                </View>
                <View style={{elevation:6,backgroundColor:'#FFF',marginLeft:20,marginRight:20,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 180 : 60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>#12545</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 245 : 110,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Mehmet Yılmaz</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 190 : 70,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>330 TL</Text>
                        <Text style={{fontFamily:'Poppins',marginRight:20,color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 150 : 100,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Kredi Kartı</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 180 : 60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>#12545</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 245 : 110,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Mehmet Yılmaz</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 190 : 70,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>330 TL</Text>
                        <Text style={{fontFamily:'Poppins',marginRight:20,color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 150 : 100,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Eft / Havale</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 180 : 60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>#12545</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 245 : 110,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Mehmet Yılmaz</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 190 : 70,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>330 TL</Text>
                        <Text style={{fontFamily:'Poppins',marginRight:20,color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 150 : 100,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Veresiye</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 180 : 60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>#12545</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 245 : 110,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Mehmet Yılmaz</Text>
                        <Text style={{fontFamily:'Poppins',color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 190 : 70,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>330 TL</Text>
                        <Text style={{fontFamily:'Poppins',marginRight:20,color:'#4A4A4A',width:Dimensions.get('screen').width > 500 ? 150 : 100,fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Nakit</Text>
                    </View>              
                    <View style={{height:15}}/>
                </View>
                
            </View>
            <View style={{height:50}}/>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,backgroundColor:'#FECB10',height:50,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <Text style={{marginLeft:20,marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Özet Toplam</Text>
                </View>
                <View style={{elevation:6,backgroundColor:'#FFF',marginLeft:20,marginRight:20,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Adres</Text>
                        <Text style={{fontFamily:'Poppins-SemiBold',marginRight:20,color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>4 Adres</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Nakit</Text>
                        <Text style={{fontFamily:'Poppins-SemiBold',marginRight:20,color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>370 TL</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Veresiye</Text>
                        <Text style={{fontFamily:'Poppins-SemiBold',marginRight:20,color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>355 TL</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Kredi Kartı</Text>
                        <Text style={{fontFamily:'Poppins-SemiBold',marginRight:20,color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>120 TL</Text>
                    </View>      
                    <View style={{height:1,backgroundColor:'#D8D8D8',marginTop:10,marginLeft:5,marginRight:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{marginLeft:20,fontFamily:'Poppins',color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>Eft / Havale</Text>
                        <Text style={{fontFamily:'Poppins-SemiBold',marginRight:20,color:'#4A4A4A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12}}>330 TL</Text>
                    </View>           
                    <View style={{height:15}}/>
                </View>
                </View>
                <View style={{height:50}}/>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,backgroundColor:'#3DBC88',height:50,borderRadius:10}}>
                <Text style={{marginLeft:20,marginTop:15,fontFamily:'Poppins',color:'#FFF',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Toplam</Text>
                    <Text style={{marginTop:15,fontFamily:'Poppins-Bold',color:'#FFF',marginRight:20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>1,175 TL</Text>
                </View>
            <View style={{height:40}}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        top: 35,
        left: Dimensions.get('screen').width / 3
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
export default CariIslem