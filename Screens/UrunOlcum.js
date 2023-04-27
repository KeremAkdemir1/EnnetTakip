import { Collapse, CollapseHeader } from 'accordion-collapse-react-native'
import { ScrollView, View, Image, Text, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
  } from "react-native-rounded-checkbox";

const UrunOlcum = () => {
    const [display, setDisplay] = useState('none')
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
    return(
        <View>


        <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
            <Text style={{
                fontFamily: 'Poppins-Bold',
                color: '#525252',
                fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-20
            }}>
                Ürün Ölçüm
            </Text>
            <View style={{flexDirection:'row',top:-20}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ marginLeft: 15, marginTop: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14, textAlign: 'left', paddingLeft: 20, paddingRight: 10, width: Dimensions.get('screen').width - 160, height: 50, borderColor: '#CCCCCC', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10 }}
                        maxLength={40}
                        placeholder='Fiş Numarası Ara..'
                    />
                    <View style={{ width: 15 }} />
                    <Pressable style={{ width: 110,marginLeft:10, height: 50, marginTop: 20, borderRadius: 10,borderColor:'#F28243',borderWidth:2,flexDirection:'row' }} onPress={() => menuOpen()}><Text style={{fontFamily:'Poppins',color:'#F28243',marginTop:10,marginLeft:10,fontSize:16}}>Sırala</Text><Image source={require('../assets/menudownarrow.png')} style={{ width: 30, height: 30, resizeMode: 'contain',top: 9,position:'absolute',right:10 }} /></Pressable>
                </View>
                <View style={{display: display, backgroundColor: '#FFFFFF', position: 'absolute', right: 10, height: 220, zIndex: 99, width: 200, marginTop: 220, borderRadius: 10, elevation: 6, flex: 1 }}>
                    <View style={{ flexDirection: 'row',marginTop:15 }}>
                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:20,height:20,position:'absolute',left:20,backgroundColor:'#F28243',marginTop:12}} checkedColor="#F28243" uncheckedColor="#FFF"/>
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins',marginLeft:30, color: '#C3C3C3' }}>Önerilen</Text>
                    </View>

                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    <View style={{ flexDirection: 'row',marginTop:15 }}>
                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:20,height:20,position:'absolute',left:20,backgroundColor:'#F28243',marginTop:12}} checkedColor="#F28243" uncheckedColor="#FFF"/>
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins',marginLeft:30, color: '#C3C3C3' }}>Fiş No Küçük</Text>
                    </View>

                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    
                    <View style={{ flexDirection: 'row',marginTop:15 }}>
                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:20,height:20,position:'absolute',left:20,backgroundColor:'#F28243',marginTop:12}} checkedColor="#F28243" uncheckedColor="#FFF"/>
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins',marginLeft:30, color: '#C3C3C3' }}>Fiş No Büyük</Text>
                    </View>
                    <View style={{ width: 200, height: 1, backgroundColor: '#EFEFEF', top: 10 }} />
                    
                    <View style={{ flexDirection: 'row',marginTop:15 }}>
                    <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{width:15,height:15}} outerStyle={{width:20,height:20,position:'absolute',left:20,backgroundColor:'#F28243',marginTop:12}} checkedColor="#F28243" uncheckedColor="#FFF"/>
                        <Text style={{ textAlign: 'center', marginTop: 10, width: 150, fontFamily: 'Poppins',marginLeft:30, color: '#C3C3C3' }}>m² Girilmeyen</Text>
                    </View>
                </View>
                <View style={{height:20}}/>
        <ScrollView>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:40,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:20}}/>
            <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:'#F28243',height:50,marginTop:0,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,left:30,marginTop:10}}>No:<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> 1254/6</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10}}>18.3<Text style={{fontFamily:'Poppins',color:'#FFF',fontSize:14}}> m²</Text> </Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#FFF',fontSize:16,marginTop:10,right:30}}>5 Adet</Text>
            </View>
            <View style={{height:350}}/>
        </ScrollView>
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
export default UrunOlcum