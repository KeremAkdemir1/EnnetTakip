
import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput } from "react-native"
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const WhatsappSablon = () => {
    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')
    const [display4, setDisplay4] = useState('flex')
    const [display5, setDisplay5] = useState('flex')
    return (
        <ScrollView>


            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-20
                }}>
                    Whatsapp Şablon Listesi
                </Text>
                <View style={{flexDirection:'row',top:-10}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{marginLeft:10,marginTop:20}}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader>
                        <View style={{ backgroundColor: '#67C5B5', width: display1 === 'flex' ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 245, height: 60,borderRadius:10,flexDirection:'row',zIndex:99 }}>
                            <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginTop:15,marginLeft:15}}>Teslim Edilecek</Text>
                        </View>
                        <Pressable style={{backgroundColor:'#67C5B5',width:60,height:50,position:'absolute',right:25,borderRadius:5,zIndex:70,top:0}}>
                                <Image source={require('../assets/smsSablon.png')} style={{resizeMode:'contain',width:40,height:40,marginLeft:8,marginTop:5}}/>
                            </Pressable>
                    </CollapseHeader>
                    <CollapseBody>
                    <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6,paddingBottom:0}}>
                        <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3,paddingBottom:0}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sayın, 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #isimsoyisim </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Siparisiniz kayıt Edilmistir </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',textDecorationLine:'underline',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tarih </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarihinde yarın teslim edilecektir </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Bizi seçtiğiniz için teşekkür ederiz</Text>
                            </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',marginTop:7,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiadi - 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #bayisabittel  - </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiweb  </Text>
                            </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',marginTop:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Yıkama Videosu: 
                            
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>  #bayivideolink </Text>
                            
                            </Text>
                            <View style={{height:20}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Pressable style={{backgroundColor:'#FFF',width:120,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Düzenle</Text>
                        </Pressable>
                        <View style={{width:0}}/>
                        <Pressable style={{backgroundColor:'#FFF',width:80,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Sil</Text>
                        </Pressable>
                        </View>
                        <View style={{height:20}}/>
                    </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={{height:20}}/>
            <View style={{marginLeft:10}}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader>
                        <View style={{ backgroundColor: '#67C5B5', width: display1 === 'flex' ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 245, height: 60,borderRadius:10,flexDirection:'row',zIndex:99 }}>
                            <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginTop:15,marginLeft:15}}>Teslim Edilecek</Text>
                        </View>
                        <Pressable style={{backgroundColor:'#67C5B5',width:60,height:50,position:'absolute',right:25,borderRadius:5,zIndex:70,top:0}}>
                                <Image source={require('../assets/smsSablon.png')} style={{resizeMode:'contain',width:40,height:40,marginLeft:8,marginTop:5}}/>
                            </Pressable>
                    </CollapseHeader>
                    <CollapseBody>
                    <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6,paddingBottom:0}}>
                        <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3,paddingBottom:0}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sayın, 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #isimsoyisim </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Siparisiniz kayıt Edilmistir </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',textDecorationLine:'underline',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tarih </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarihinde yarın teslim edilecektir </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Bizi seçtiğiniz için teşekkür ederiz</Text>
                            </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',marginTop:7,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiadi - 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #bayisabittel  - </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiweb  </Text>
                            </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',marginTop:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Yıkama Videosu: 
                            
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>  #bayivideolink </Text>
                            
                            </Text>
                            <View style={{height:20}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Pressable style={{backgroundColor:'#FFF',width:120,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Düzenle</Text>
                        </Pressable>
                        <View style={{width:0}}/>
                        <Pressable style={{backgroundColor:'#FFF',width:80,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Sil</Text>
                        </Pressable>
                        </View>
                        <View style={{height:20}}/>
                    </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={{height:20}}/>
            <View style={{marginLeft:10}}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader>
                        <View style={{ backgroundColor: '#67C5B5', width: display1 === 'flex' ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 245, height: 60,borderRadius:10,flexDirection:'row',zIndex:99 }}>
                            <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginTop:15,marginLeft:15}}>Teslim Edilecek</Text>
                        </View>
                        <Pressable style={{backgroundColor:'#67C5B5',width:60,height:50,position:'absolute',right:25,borderRadius:5,zIndex:70,top:0}}>
                                <Image source={require('../assets/smsSablon.png')} style={{resizeMode:'contain',width:40,height:40,marginLeft:8,marginTop:5}}/>
                            </Pressable>
                    </CollapseHeader>
                    <CollapseBody>
                    <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6,paddingBottom:0}}>
                        <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3,paddingBottom:0}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sayın, 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #isimsoyisim </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Siparisiniz kayıt Edilmistir </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',textDecorationLine:'underline',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tarih </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarihinde yarın teslim edilecektir </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Bizi seçtiğiniz için teşekkür ederiz</Text>
                            </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',marginTop:7,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiadi - 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #bayisabittel  - </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiweb  </Text>
                            </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',marginTop:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Yıkama Videosu: 
                            
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>  #bayivideolink </Text>
                            
                            </Text>
                            <View style={{height:20}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Pressable style={{backgroundColor:'#FFF',width:120,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Düzenle</Text>
                        </Pressable>
                        <View style={{width:0}}/>
                        <Pressable style={{backgroundColor:'#FFF',width:80,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Sil</Text>
                        </Pressable>
                        </View>
                        <View style={{height:20}}/>
                    </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={{height:20}}/>
            <View style={{marginLeft:10}}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader>
                        <View style={{ backgroundColor: '#67C5B5', width: display1 === 'flex' ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 245, height: 60,borderRadius:10,flexDirection:'row',zIndex:99 }}>
                            <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginTop:15,marginLeft:15}}>Teslim Edilecek</Text>
                        </View>
                        <Pressable style={{backgroundColor:'#67C5B5',width:60,height:50,position:'absolute',right:25,borderRadius:5,zIndex:70,top:0}}>
                                <Image source={require('../assets/smsSablon.png')} style={{resizeMode:'contain',width:40,height:40,marginLeft:8,marginTop:5}}/>
                            </Pressable>
                    </CollapseHeader>
                    <CollapseBody>
                    <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6,paddingBottom:0}}>
                        <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3,paddingBottom:0}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sayın, 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #isimsoyisim </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Siparisiniz kayıt Edilmistir </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',textDecorationLine:'underline',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tarih </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarihinde yarın teslim edilecektir </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Bizi seçtiğiniz için teşekkür ederiz</Text>
                            </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',marginTop:7,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiadi - 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #bayisabittel  - </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiweb  </Text>
                            </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',marginTop:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Yıkama Videosu: 
                            
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>  #bayivideolink </Text>
                            
                            </Text>
                            <View style={{height:20}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Pressable style={{backgroundColor:'#FFF',width:120,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Düzenle</Text>
                        </Pressable>
                        <View style={{width:0}}/>
                        <Pressable style={{backgroundColor:'#FFF',width:80,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Sil</Text>
                        </Pressable>
                        </View>
                        <View style={{height:20}}/>
                    </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={{height:20}}/>
            <View style={{marginLeft:10}}>
                <Collapse onToggle={(x) => x === true ? setDisplay1('none') : setDisplay1('flex')}>
                    <CollapseHeader>
                        <View style={{ backgroundColor: '#67C5B5', width: display1 === 'flex' ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 245, height: 60,borderRadius:10,flexDirection:'row',zIndex:99 }}>
                            <Text style={{fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginTop:15,marginLeft:15}}>Teslim Edilecek</Text>
                        </View>
                        <Pressable style={{backgroundColor:'#67C5B5',width:60,height:50,position:'absolute',right:25,borderRadius:5,zIndex:70,top:0}}>
                                <Image source={require('../assets/smsSablon.png')} style={{resizeMode:'contain',width:40,height:40,marginLeft:8,marginTop:5}}/>
                            </Pressable>
                    </CollapseHeader>
                    <CollapseBody>
                    <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6,paddingBottom:0}}>
                        <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3,paddingBottom:0}}>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sayın, 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #isimsoyisim </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Siparisiniz kayıt Edilmistir </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',textDecorationLine:'underline',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#tarih </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Tarihinde yarın teslim edilecektir </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Bizi seçtiğiniz için teşekkür ederiz</Text>
                            </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',marginTop:7,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiadi - 
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}> #bayisabittel  - </Text>
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>#bayiweb  </Text>
                            </Text>
                            <Text style={{color:'#6A6A6A',fontFamily:'Poppins',marginTop:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Yıkama Videosu: 
                            
                            <Text style={{color:'#5c5b5b',fontFamily:'Poppins-SemiBold',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>  #bayivideolink </Text>
                            
                            </Text>
                            <View style={{height:20}}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Pressable style={{backgroundColor:'#FFF',width:120,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Düzenle</Text>
                        </Pressable>
                        <View style={{width:0}}/>
                        <Pressable style={{backgroundColor:'#FFF',width:80,height:50,marginLeft:15,marginTop:10,borderRadius:10}}>
                            <Text style={{textAlign:'center',marginTop:14,fontFamily:'Poppins',color:'#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Sil</Text>
                        </Pressable>
                        </View>
                        <View style={{height:20}}/>
                    </View>
                    </CollapseBody>
                </Collapse>
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
    header: { height: 50, backgroundColor: '#D9D9D9', fontFamily: 'Poppins', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    text: { fontFamily: 'Poppins', marginLeft: 25, color: '#808080' },
    datatext: { fontFamily: 'Poppins', color: '#A6A6A6', marginTop: 15, textAlign: 'center' },
    toplamText: { fontFamily: 'Poppins-SemiBold', color: '#F28243', marginTop: 35, textAlign: 'center', top: -15 }
})
export default WhatsappSablon