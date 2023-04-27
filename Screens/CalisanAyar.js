import { Collapse, CollapseHeader } from 'accordion-collapse-react-native'
import { ScrollView, View, Image, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
  } from "react-native-rounded-checkbox";
const CalisanAyar = () => {

    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [checked, setChecked] = useState(false);
    return (
        <ScrollView>

            <View style={{ marginTop: 100, bottom: 40, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: -5, paddingBottom: 10, textAlign: 'center'
                }}>
                    Çalışan Profili
                </Text>
                <View style={{flexDirection:'row',top:0}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>

            <View style={{ marginLeft: 15 }}>
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, backgroundColor: '#e3e1e1', borderRadius: 10, borderColor: '#3DBC88' }}>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: Dimensions.get('screen').width > 500 ? 60 : 50, marginTop: 0, marginLeft: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#3DBC88', marginTop: 15, marginLeft: 20,display:'flex',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Müşteri izinleri</Text>
                                        <Image source={display1 === 'flex' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: 0, marginTop: 0 }} />
                                    </View>
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display1 === "flex" ? 'none' : 'flex' }}>
                                    <View style={{flexDirection:'row',marginTop:0}}>
                                        <Text style={{fontFamily:'Poppins',color:'#6A6A6A',marginLeft:60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Müşteri Oluşturma</Text>
                                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:25,height:25,position:'absolute',right:80,backgroundColor:'#FFF',top:-1}} uncheckedColor="#FFF"/>
                                    </View>
                                    <View style={{height:10}}/>
                                    <View style={{flexDirection:'row',marginTop:0}}>
                                        <Text style={{fontFamily:'Poppins',color:'#6A6A6A',marginLeft:60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Müşteri Güncelleme</Text>
                                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:25,height:25,position:'absolute',right:80,backgroundColor:'#FFF',top:-1}} uncheckedColor="#FFF"/>
                                    </View>
                                    <View style={{height:10}}/>
                                    <View style={{flexDirection:'row',marginTop:0}}>
                                        <Text style={{fontFamily:'Poppins',color:'#6A6A6A',marginLeft:60,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Müşteri Silme</Text>
                                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:25,height:25,position:'absolute',right:80,backgroundColor:'#FFF',top:-1}} uncheckedColor="#FFF"/>
                                    </View>
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
                <View style={{height:40}}/>
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay2('flex') : setDisplay2('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, backgroundColor: '#e3e1e1', borderRadius: 10, borderColor: '#3DBC88' }}>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: Dimensions.get('screen').width > 500 ? 60 : 50, marginTop: 0, marginLeft: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#FECB10', marginTop: 15, marginLeft: 20,display:'flex',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Sipariş İzinleri</Text>
                                        <Image source={display2 === 'flex' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: 0, marginTop: 0 }} />
                                    </View>
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 195, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display2 === "flex" ? 'none' : 'flex' }}>
                                    <View style={{flexDirection:'row',marginTop:0}}>
                                        <Text style={{fontFamily:'Poppins',color:'#6A6A6A',marginLeft:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sipariş Detay Görüntüleme</Text>
                                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:25,height:25,position:'absolute',right:40,backgroundColor:'#FFF',top:-1}} checkedColor="#FECB10" uncheckedColor="#FFF"/>
                                    </View>
                                    <View style={{height:10}}/>
                                    <View style={{flexDirection:'row',marginTop:0}}>
                                        <Text style={{fontFamily:'Poppins',color:'#6A6A6A',marginLeft:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Toplu Sipariş Listesi Görebilme</Text>
                                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:25,height:25,position:'absolute',right:40,backgroundColor:'#FFF',top:-1}} checkedColor="#FECB10" uncheckedColor="#FFF"/>
                                    </View>
                                    
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
            </View>
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
    }
})
export default CalisanAyar