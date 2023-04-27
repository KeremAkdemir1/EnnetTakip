
import { Collapse, CollapseHeader } from 'accordion-collapse-react-native'
import { ScrollView, View, Image, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
} from "react-native-rounded-checkbox";

const SmsWhatsappIzin = () => {


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
                    Sms ve WhatsApp İzinleri
                </Text>
                <View style={{ flexDirection: 'row', top: 0 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
            </View>

            <View style={{ marginLeft: 15 }}>
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 50, backgroundColor: '#e3e1e1', borderRadius: 10, borderColor: '#3DBC88' }}>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 60, marginTop: 0, marginLeft: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#0FA9FF', marginTop: 15, marginLeft: 20, display: 'flex' }}>Sms İzinleri</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 13,marginLeft:30 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 60 }}>Hepsi</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right:-40, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF' />
                                       </View>
                                        <Image source={display1 === 'flex' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: 0, marginTop: 0 }} />
                                    </View>
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 0, borderRadius: 10, display: display1 === "flex" ? 'none' : 'flex' }}>
                                   <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Oluşturuldu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -90, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    <View style={{width:92}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Oluşturuldu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -50, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Teslim Alındı</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -87, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    <View style={{width:89}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>İptal Edildi</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -58, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Dağıtıma Çıkacak</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -50, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    <View style={{width:50}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Randevu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -69, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Evde Yok Mesajı</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -65, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    <View style={{width:60}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Randevu İptal</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -40, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#0FA9FF'/>
                                    </View>
                                    </View>


                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
                <View style={{ height: 40 }} />
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 50, backgroundColor: '#e3e1e1', borderRadius: 10, borderColor: '#3DBC88' }}>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 60, marginTop: 0, marginLeft: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#F28243', marginTop: 15, marginLeft: 20, display: 'flex' }}>Whatsapp İzinleri</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 13,marginLeft:0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 60 }}>Hepsi</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right:-40, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243' />
                                       </View>
                                        <Image source={display1 === 'flex' ? require('../assets/arrow.png') : require('../assets/arrowDown.png')} style={{ position: 'absolute', right: 0, marginTop: 0 }} />
                                    </View>
                                </View>
                                <View style={{ width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 0, borderRadius: 10, display: display1 === "flex" ? 'none' : 'flex' }}>
                                   <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Oluşturuldu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -90, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    <View style={{width:92}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Oluşturuldu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -50, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Teslim Alındı</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -87, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    <View style={{width:89}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>İptal Edildi</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -58, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Dağıtıma Çıkacak</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -50, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    <View style={{width:50}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Randevu</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -69, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    </View>
                                    <View style={{ height: 20 }} />
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row', marginTop: 0,justifyContent:'space-between' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Evde Yok Mesajı</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -65, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    <View style={{width:60}}/>
                                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#6A6A6A', marginLeft: 20 }}>Randevu İptal</Text>
                                        <RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} text="" innerStyle={{ width: 15, height: 15 }} outerStyle={{ width: 25, height: 25, position: 'absolute', right: -40, backgroundColor: '#FFF', top: -1 }} uncheckedColor="#FFF" checkedColor='#F28243'/>
                                    </View>
                                    </View>


                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
            </View>
            <View style={{height:50}}/>
        </ScrollView>
    )
}


export default SmsWhatsappIzin