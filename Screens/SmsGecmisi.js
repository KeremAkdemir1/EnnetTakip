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

const SmsGecmisi = () => {


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
            <View style={{flexDirection:'row'}}>
                <View style={{top:35}}>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins', color: '#C0BEBE', paddingBottom: 0, marginTop: 80, marginLeft: 20 }}>
                Müşteri,
            </Text>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins-SemiBold', color: '#525252', paddingBottom: 10, marginTop: 0, marginLeft: 20 }}>
                Mehmet Yılmaz
            </Text>
            </View>
            <Pressable style={{ right: 20, position: 'absolute', backgroundColor: '#d6d6d6', width: 50, height: 50, marginTop: 120, borderRadius: 10,zIndex:99 }} >
                    <Image source={require('../assets/3bar.png')} style={{ top: 15, left: 15, width: 20, height: 20,zIndex:95 }} />
                </Pressable>
            </View>
            <View style={{marginTop:80}}>
                <Collapse>
                <CollapseHeader style={{backgroundColor:'#F28243',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',fontFamily:'Poppins'}}>Ahmet Akbulut</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins',top:1}}>0536 XXX XX XX</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins'}}>Babası</Text>
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Sayın, <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#isimsoyisim</Text> halılarınız gün içerisinde <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#teslimtarihi</Text> teslim edilecektir.Sipariş tutarınız <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tutar</Text> tldir.İyi günler dileriz <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>DEMO HALI - 0216 471 10 10</Text></Text>
                    <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',marginLeft:20,marginTop:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarih: 17.09.2023 Saat: 13:33</Text>
                    <View style={{height:20}}/>
                </CollapseBody>
                </Collapse>
                <View style={{height:20}}/>
                <Collapse>
                <CollapseHeader style={{backgroundColor:'#67C5B5',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',fontFamily:'Poppins'}}>Ahmet Akbulut</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins',top:1}}>0536 XXX XX XX</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins'}}>Babası</Text>
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Sayın, <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#isimsoyisim</Text> halılarınız gün içerisinde <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#teslimtarihi</Text> teslim edilecektir.Sipariş tutarınız <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tutar</Text> tldir.İyi günler dileriz <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>DEMO HALI - 0216 471 10 10</Text></Text>
                    <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',marginLeft:20,marginTop:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarih: 17.09.2023 Saat: 13:33</Text>
                    <View style={{height:20}}/>
                </CollapseBody>
                </Collapse>
                <View style={{height:20}}/>
                <Collapse>
                <CollapseHeader style={{backgroundColor:'#203A4B',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',fontFamily:'Poppins'}}>Ahmet Akbulut</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins',top:1}}>0536 XXX XX XX</Text>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 17 : 13,color:'#FFF',fontFamily:'Poppins'}}>Babası</Text>
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Sayın, <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#isimsoyisim</Text> halılarınız gün içerisinde <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#teslimtarihi</Text> teslim edilecektir.Sipariş tutarınız <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tutar</Text> tldir.İyi günler dileriz <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>DEMO HALI - 0216 471 10 10</Text></Text>
                    <Text style={{fontFamily:'Poppins-SemiBold',color:'#6A6A6A',marginLeft:20,marginTop:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarih: 17.09.2023 Saat: 13:33</Text>
                    <View style={{height:20}}/>
                </CollapseBody>
                </Collapse>
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
export default SmsGecmisi