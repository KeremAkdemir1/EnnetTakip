

import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput, Switch } from "react-native"
import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType"

const UrunListesi = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [display1, setDisplay1] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')
    const [display4, setDisplay4] = useState('flex')
    const [ilce, setIlce] = useState('')
    const navigation = useNavigation()
    const ilceData = [
        { key: '1', value: 'Metrekare' },
        { key: '21', value: 'asdasd' },
        { key: '3', value: 'qweq' },
        { key: '4', value: 'atasda' },
    ]
    return (
        <ScrollView>


            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-20
                }}>
                    Ürün Listesi
                </Text>
                <View style={{flexDirection:'row',top:-20}}>
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
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 120, backgroundColor: '#d6d4d4', borderRadius: 10 }}>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 100, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20 }}>Makine Halısı</Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}>Ücret: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}> 150 TL</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20 }}>Adet</Text>
                                        <View style={{ width: 60, height: 50, position: 'absolute', right: 60, marginTop: 0 }}>
                                            <Switch

                                                trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
                                                thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 10, borderRadius: 10,display: display1 === "flex" ? 'none' : 'flex' }}>
                                    <TextInput placeholder="Makine Halısı" style={{ paddingLeft:20,marginTop: 30, width: Dimensions.get('screen').width - 150, marginLeft: 50, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A' }} />
                                    <View style={{ flexDirection: 'row', marginLeft: 50,marginRight:50 }}>
                                    <View style={{flex:2}}>
                                        <SelectList
                                            setSelected={(val) => setIlce(val)}
                                            data={ilceData}
                                            save="value"
                                            placeholder='Adres Seçin'
                                            fontFamily="Poppins"
                                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', marginTop: 10 }}
                                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}
                                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            searchPlaceholder="Ara"
                                            defaultOption={{ key: '1', value: 'Metrekare' }}
                                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 3.1, height: 100, position:'absolute',marginTop:70,backgroundColor: '#FFFFFF'}}
                                        />
                                        </View>
                                        <View style={{width:20}}/>
                                        <View style={{flex:2}}>
                                        <TextInput placeholder="9999 TL" style={{ marginTop: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly', width: Dimensions.get('screen').width - 70, marginLeft:10,marginRight:50 }}>
                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10,  height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }}>Kaydet</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                        </View>
                                        <View style={{top:-5,marginLeft:20}}>
                                        <Switch

trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
/>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
                   <View style={{ height: 20 }} />
                   <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 120, backgroundColor: '#d6d4d4', borderRadius: 10 }}>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 100, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20 }}>Makine Halısı</Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}>Ücret: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}> 150 TL</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20 }}>Adet</Text>
                                        <View style={{ width: 60, height: 50, position: 'absolute', right: 60, marginTop: 0 }}>
                                            <Switch

                                                trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
                                                thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 10, borderRadius: 10,display: display1 === "flex" ? 'none' : 'flex' }}>
                                    <TextInput placeholder="Makine Halısı" style={{ paddingLeft:20,marginTop: 30, width: Dimensions.get('screen').width - 150, marginLeft: 50, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A' }} />
                                    <View style={{ flexDirection: 'row', marginLeft: 50,marginRight:50 }}>
                                    <View style={{flex:2}}>
                                        <SelectList
                                            setSelected={(val) => setIlce(val)}
                                            data={ilceData}
                                            save="value"
                                            placeholder='Adres Seçin'
                                            fontFamily="Poppins"
                                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', marginTop: 10 }}
                                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}
                                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            searchPlaceholder="Ara"
                                            defaultOption={{ key: '1', value: 'Metrekare' }}
                                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 3.1, height: 100, position:'absolute',marginTop:70,backgroundColor: '#FFFFFF'}}
                                        />
                                        </View>
                                        <View style={{width:20}}/>
                                        <View style={{flex:2}}>
                                        <TextInput placeholder="9999 TL" style={{ marginTop: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly', width: Dimensions.get('screen').width - 70, marginLeft:10,marginRight:50 }}>
                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10,  height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }}>Kaydet</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                        </View>
                                        <View style={{top:-5,marginLeft:20}}>
                                        <Switch

trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
/>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
                <View style={{ height: 20 }} />
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 120, backgroundColor: '#d6d4d4', borderRadius: 10 }}>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 100, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20 }}>Makine Halısı</Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}>Ücret: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}> 150 TL</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20 }}>Adet</Text>
                                        <View style={{ width: 60, height: 50, position: 'absolute', right: 60, marginTop: 0 }}>
                                            <Switch

                                                trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
                                                thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 10, borderRadius: 10,display: display1 === "flex" ? 'none' : 'flex' }}>
                                    <TextInput placeholder="Makine Halısı" style={{ paddingLeft:20,marginTop: 30, width: Dimensions.get('screen').width - 150, marginLeft: 50, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A' }} />
                                    <View style={{ flexDirection: 'row', marginLeft: 50,marginRight:50 }}>
                                    <View style={{flex:2}}>
                                        <SelectList
                                            setSelected={(val) => setIlce(val)}
                                            data={ilceData}
                                            save="value"
                                            placeholder='Adres Seçin'
                                            fontFamily="Poppins"
                                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', marginTop: 10 }}
                                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}
                                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            searchPlaceholder="Ara"
                                            defaultOption={{ key: '1', value: 'Metrekare' }}
                                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 3.1, height: 100, position:'absolute',marginTop:70,backgroundColor: '#FFFFFF'}}
                                        />
                                        </View>
                                        <View style={{width:20}}/>
                                        <View style={{flex:2}}>
                                        <TextInput placeholder="9999 TL" style={{ marginTop: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly', width: Dimensions.get('screen').width - 70, marginLeft:10,marginRight:50 }}>
                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10,  height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }}>Kaydet</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                        </View>
                                        <View style={{top:-5,marginLeft:20}}>
                                        <Switch

trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
/>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
                <View style={{ height: 20 }} />
                <View>
                    <Collapse onToggle={(x) => x === true ? setDisplay1('flex') : setDisplay1('none')}>
                        <CollapseHeader>
                            <View style={{ width: Dimensions.get('screen').width - 30, height: display1 === 'none' ? 250 : 120, backgroundColor: '#d6d4d4', borderRadius: 10 }}>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 100, marginTop: 10, marginLeft: 10, borderRadius: 10, display: display1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20 }}>Makine Halısı</Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#203A4B', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}>Ücret: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 20, marginLeft: 20, position: 'absolute', right: 40 }}> 150 TL</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20 }}>Adet</Text>
                                        <View style={{ width: 60, height: 50, position: 'absolute', right: 60, marginTop: 0 }}>
                                            <Switch

                                                trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
                                                thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#FFF', width: Dimensions.get('screen').width - 50, height: 225, marginTop: 10, marginLeft: 10, borderRadius: 10,display: display1 === "flex" ? 'none' : 'flex' }}>
                                    <TextInput placeholder="Makine Halısı" style={{ paddingLeft:20,marginTop: 30, width: Dimensions.get('screen').width - 150, marginLeft: 50, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', color: '#9A9A9A' }} />
                                    <View style={{ flexDirection: 'row', marginLeft: 50,marginRight:50 }}>
                                    <View style={{flex:2}}>
                                        <SelectList
                                            setSelected={(val) => setIlce(val)}
                                            data={ilceData}
                                            save="value"
                                            placeholder='Adres Seçin'
                                            fontFamily="Poppins"
                                            boxStyles={{ zIndex: 95, color: '#808080', height: 50, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', marginTop: 10 }}
                                            dropdownTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            disabledTextStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}
                                            inputStyles={{ fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, color: '#808080' }}
                                            searchPlaceholder="Ara"
                                            defaultOption={{ key: '1', value: 'Metrekare' }}
                                            dropdownStyles={{ zIndex: 95, width: Dimensions.get('screen').width / 3.1, height: 100, position:'absolute',marginTop:70,backgroundColor: '#FFFFFF'}}
                                        />
                                        </View>
                                        <View style={{width:20}}/>
                                        <View style={{flex:2}}>
                                        <TextInput placeholder="9999 TL" style={{ marginTop: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: '#CCCCCC', height: 50, borderRadius: 10, fontFamily: 'Poppins', paddingLeft: 10, color: '#9A9A9A' }} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-evenly', width: Dimensions.get('screen').width - 70, marginLeft:10,marginRight:50 }}>
                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10,  height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }}>Kaydet</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                        </View>

                                        <View style={{flex:3}}>
                                            <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 40, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 13, textAlign: 'center', marginTop: 10 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                        </View>
                                        <View style={{top:-5,marginLeft:20}}>
                                        <Switch

trackColor={{ false: '#DBD9D9', true: '#3DBC88' }}
thumbColor={isEnabled ? '#FFF' : '#d6d4d4'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
/>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </CollapseHeader>
                    </Collapse>
                </View>
            </View>
            <View style={{height:100}}/>
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
export default UrunListesi