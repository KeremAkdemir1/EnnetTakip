
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import I18n from 'i18n-js'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Entypo } from "@expo/vector-icons";
import DatePicker from 'react-native-datepicker-expo'
import { SelectList } from 'react-native-dropdown-select-list'
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
} from "react-native-rounded-checkbox";
const SistemAyarlari = () => {
    const [il, setIl] = useState('')
    const [ilce, setIlce] = useState('')
    const navigation = useNavigation()
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

    return(
        <ScrollView>
        <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width }}>
            <Text style={styles.topText}>
            Sistem Ayarları
            </Text>
        </View>
        <View style={{ flexDirection: 'row', top: 50 }}>
            <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
            <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
            <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
            <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
            <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
        </View>
        <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins', color: '#C0BEBE', paddingBottom: 0,marginTop:80,marginLeft:20 }}>
                Günaydın
            </Text>
            <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 24 : 14, fontFamily: 'Poppins-SemiBold', color: '#525252', paddingBottom: 10,marginTop:0,marginLeft:20 }}>
                Mehmet Yılmaz
            </Text>
            <View style={{flexDirection:'row',marginTop:60}}>
                <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-SemiBold', color: '#878787', paddingBottom: 0,marginLeft:20,marginTop:5,width:Dimensions.get('screen').width- 160 }}>
                Halılar kaç günde teslim edilir
            </Text>
            <View style={{width:30}}/>
            <TextInput value='7' style={{ borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, height: 40, borderColor: '#CCCCCC',fontSize:16, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 35, color: '#9A9A9A',paddingRight:20 }} />

                </View>
                <View style={{flexDirection:'row',marginTop:60}}>
                <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-SemiBold', color: '#878787', paddingBottom: 0,marginLeft:20,marginTop:5,width:Dimensions.get('screen').width / 1.5 }}>
                Teslim tarihi gelen siparişler otomatik teslim edileceklere gitsin.
            </Text>
            <View style={{width:30}}/>
            <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 25, height: 25 }} outerStyle={{ width: 35, height: 35, position: 'absolute', right: 50, backgroundColor: '#CCD1E2', top: 15 }} uncheckedColor="#CCD1E2" checkedColor='#F28243'/>

                </View>
                <View style={{flexDirection:'row',marginTop:60}}>
                <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-SemiBold', color: '#878787', paddingBottom: 0,marginLeft:20,marginTop:5,width:Dimensions.get('screen').width / 1.5 }}>
                Bulunduğu gün alınmayan siparişleri ertesi güne at
            </Text>
            <View style={{width:30}}/>
            <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 25, height: 25 }} outerStyle={{ width: 35, height: 35, position: 'absolute', right: 50, backgroundColor: '#CCD1E2', top: 15 }} uncheckedColor="#CCD1E2" checkedColor='#F28243'/>

                </View>
                
                <Text style={{ fontSize: Dimensions.get('screen').width > 500 ? 26 : 16, fontFamily: 'Poppins-SemiBold', color: '#0CBDDE', paddingBottom: 0,marginLeft:0,marginTop:45,textAlign:'center' }}>Hangi illerde hizmet veriyorsunuz?</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row',marginLeft:30,marginTop:25 }}>
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
                <TextInput textAlignVertical='top' multiline={true} placeholder='İstanbul/Ataşehir, İstanbul/Beşiktaş, Ankara/Çankaya
Ankara/Keçiöğren' numberOfLines={10} style={{ paddingBottom: 20, fontSize: Dimensions.get('screen').width > 500 ? 20 : 16, textAlign: 'left',marginLeft:30,marginTop:25, paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: Dimensions.get('screen').width - 60, height: 100, borderRadius: 10,borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC' }} />
<View style={{height:60}}/>
<View style={{flexDirection:'row'}}>
    <Pressable style={{width:50,height:30,backgroundColor:'#CCD1E2',borderRadius:10}}>
        <Text style={{textAlign:'center',textAlignVertical:'auto'}}>Pzt</Text>
    </Pressable>
    <View style={{width:5}}/>
    <Pressable>
        <Text>Sal</Text>
    </Pressable>
    <View style={{width:5}}/>
    <Pressable>
        <Text>Çar</Text>
    </Pressable>
    <View style={{width:5}}/>

    <Pressable>
        <Text>Prş</Text>
    </Pressable>
    <View style={{width:5}}/>

    <Pressable>
        <Text>Cum</Text>
    </Pressable>
    <View style={{width:5}}/>

    <Pressable>
        <Text>Cmt</Text>
    </Pressable>
    <View style={{width:5}}/>

    <Pressable>
        <Text>Paz</Text>
    </Pressable>
</View>
    </ScrollView>
    )

}

const styles = StyleSheet.create({
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        top: 35,
        left: Dimensions.get('screen').width / 3.2
    },
    buttonText:{
        color:'#FFFFFF',
        fontFamily:'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        height:50,
        textAlign:'center'
    },
})
export default SistemAyarlari