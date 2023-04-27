
import * as React from 'react';
import {useState} from 'react'
import { ProgressBar, MD3Colors, } from 'react-native-paper';
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';
import I18n from 'i18n-js';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const VersiyonGelistirme = () => {


    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')


    return(
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
            
            <View style={{marginTop:80}}>

            <Text style={{paddingBottom:40,textAlign:'center',fontFamily:'Poppins-Bold',color:'#525252',fontSize:22}}>Versiyon Geliştirme</Text>
                <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                <CollapseHeader style={{backgroundColor:'#F28243',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                    <Text style={{fontSize:15,color:'#FFF',fontFamily:'Poppins'}}>Versiyon V.1.0.2</Text>
                    <View style={{width:20}}/>
                    <Image source={display1 === 'none' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: -25, marginBottom: 0,top:-12 }} />
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                    <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Performans güncellemesi yapıldı</Text>
                    <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Müşteri Listesi Güncellendi</Text>
                    <View style={{height:20}}/>
                </CollapseBody>
                </Collapse>
                <View style={{height:20}}/>
                <Collapse onToggle={(x) => x === true ? setDisplay2('flex') : setDisplay2('none')}>
                <CollapseHeader style={{backgroundColor:'#67C5B5',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                <Text style={{fontSize:15,color:'#FFF',fontFamily:'Poppins'}}>Versiyon V.1.0.2</Text>
                    <View style={{width:20}}/>
                    <Image source={display1 === 'none' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: -25, marginBottom: 0,top:-12 }} />
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Performans güncellemesi yapıldı</Text>
                    <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Müşteri Listesi Güncellendi</Text>
                    <View style={{height:20}}/>
                </CollapseBody>
                </Collapse>
                <View style={{height:20}}/>
                <Collapse onToggle={(x) => x === true ? setDisplay3('flex') : setDisplay3('none')}>
                <CollapseHeader style={{backgroundColor:'#203A4B',width:Dimensions.get('screen').width- 30,marginLeft:15,borderTopLeftRadius:10,borderTopRightRadius:10,height:50}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:Dimensions.get('screen').width - 100 , marginLeft:20,marginTop:13}}>
                <Text style={{fontSize:15,color:'#FFF',fontFamily:'Poppins'}}>Versiyon V.1.0.2</Text>
                    <View style={{width:20}}/>
                    <Image source={display1 === 'none' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: -25, marginBottom: 0,top:-12 }} />
                </View>
                </CollapseHeader>
                <CollapseBody style={{backgroundColor:'#F6F6F6',elevation:6,width:Dimensions.get('screen').width - 30,marginLeft:15,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Performans güncellemesi yapıldı</Text>
                    <Text style={{fontFamily:'Poppins',fontSize:14,color:'#696969',marginLeft:20,marginTop:10,marginRight:20}}>Müşteri Listesi Güncellendi</Text>
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

export default VersiyonGelistirme