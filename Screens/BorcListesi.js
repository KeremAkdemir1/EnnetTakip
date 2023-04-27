
import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Table, Row, Rows } from 'react-native-table-component';


const BorcListesi = () => {

    const tableHead = ['Ürün Adı','','','Tutar']
    const tableData = [
        ['Makine Halısı', '1 Adet', '6m²', '150.00TL'],
        ['Stor Perde', '1 Adet', '7.3m²', '150.00TL'],
        ['Battaniye', '2 Adet', '0', '200.00TL'],

    ]
    const toplamData = [
        ['TOPLAM:', '4', '13.3', '410.00TL'],
    ]

    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')
    const [display4, setDisplay4] = useState('flex')
    const [display5, setDisplay5] = useState('flex')

    return (
        <ScrollView>
            <View style={{ marginTop: 70, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center', top: -20
                }}>
                    Borç Listesi
                </Text>
                <View style={{ flexDirection: 'row', top: -10 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>
            <View style={{ top: 0 }}>
            </View>
            <View style={{marginTop:30}}>
            <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
            <CollapseHeader>
            <View style={{width:Dimensions.get('screen').width - 50,marginLeft:25,height:50,backgroundColor:'#F28243',borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#FFF',fontFamily:'Poppins',marginTop:15,marginLeft:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>{display1 === 'flex' ? '#1254' : 'Sip No'}</Text>
                <Text style={{color:'#FFF',fontFamily:'Poppins',marginTop:13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>{display1 === 'flex' ? 'Mehmet Deniz' : 'Müşteri Adı'}</Text>
                <Text style={{color:'#FFF',fontFamily:'Poppins',marginTop:13,marginLeft:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>{display1 === 'flex' ? '11.03.2023' : '11.03.2023'}</Text>
                <Image source={require('../assets/right.png')} style={{width:30,height:30,left:-15,top:8}}/>
            </View>
            <View style={{width:Dimensions.get('screen').width - 50,paddingBottom:15,elevation:6,backgroundColor:'#FFF',marginLeft:25,borderBottomLeftRadius:10,borderBottomRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#4A4A4A',fontFamily:'Poppins',marginTop:20,marginLeft:10,display:display1 === 'flex' ? 'none' : 'flex',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#1254</Text>
                <Text style={{color:'#4A4A4A',fontFamily:'Poppins',marginTop:20,display:display1 === 'flex' ? 'none' : 'flex',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Mehmet Yılmaz</Text>
                <Text style={{color:'#4A4A4A',fontFamily:'Poppins',marginTop:20,marginLeft:10,display:display1 === 'flex' ? 'none' : 'flex',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>330 TL</Text>
                <View style={{width:30,height:30}}/>
             
                <View style={{ display:display1 === 'flex' ? 'flex' : 'none',width: Dimensions.get('screen').width - 80,left:-15,marginTop:10, borderRadius: 10}}>
                            <Table>
                                <Row data={tableHead} style={styles.header} textStyle={styles.text} />
                                <Rows data={tableData} style={{backgroundColor:'#F3F2F2',paddingBottom:5}} textStyle={styles.datatext} />
                                <Rows data={toplamData} style={{backgroundColor:'#F3F2F2'}} textStyle={styles.toplamText} />
                            </Table>
                            <View style={{height:10}}/>
                        </View>
                
            </View>
            
            </CollapseHeader>
            <CollapseBody>

            </CollapseBody>
        </Collapse>
        </View>
        <View style={{height:40}}/>
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
    header: { height: 50, backgroundColor: '#D9D9D9', fontFamily: 'Poppins', borderTopLeftRadius: 10, borderTopRightRadius: 10,fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 },
    text: { fontFamily: 'Poppins', marginLeft:Dimensions.get('screen').width > 500 ? 55 : 25, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 },
    datatext: { fontFamily: 'Poppins', color: '#A6A6A6', marginTop: 15, textAlign: 'center',fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 },
    toplamText: { fontFamily: 'Poppins-SemiBold', color: '#F28243', marginTop: 35, textAlign: 'center', top: -15,fontSize:Dimensions.get('screen').width > 500 ? 20 : 14 }
})
export default BorcListesi