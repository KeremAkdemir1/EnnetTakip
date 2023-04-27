
import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput, Switch, FlatList } from "react-native"
import { useState,useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType"
import AsyncStorage from '@react-native-async-storage/async-storage'
const GiderListele = () => {

    const [token, setToken] = useState("")
    const [giderList, setGiderList] = useState(undefined)
    const [displayItem, setDisplayItem] = useState(undefined)
    useEffect(() => {
      
        AsyncStorage.getItem('token').then((val) => {
            setToken("Bearer " + val)
        });
    }, [])
    
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://ennettakip.com/api/v1/expense/search", requestOptions)
          .then(response => response.json())
          .then(result => setGiderList(result.data))
          .catch(error => console.log('error', error));
          console.log(giderList)
    }, [token])
    
    const [display, setDisplay] = useState('flex')
    const [display2, setDisplay2] = useState('flex')
    const [display3, setDisplay3] = useState('flex')
    const [display4, setDisplay4] = useState('flex')
    const [display5, setDisplay5] = useState('flex')
    const [date1, setDate1] = useState("01.01.2023");
    const [date2, setDate2] = useState("01.01.2023");
    return (
        <ScrollView>
            <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-10
                }}>
                    Ürün Listesi
                </Text>
                <View style={{flexDirection:'row',top:0}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                    <View >
                        <DatePicker
                            style={{ width:Dimensions.get('screen').width / 2.3, height: 50, borderRadius: 20, fontFamily: 'Poppins', marginTop: 10,marginLeft:20 }}
                            date={date1}
                            androidMode="spinner"
                            mode="date"
                            placeholder="select date"
                            format="DD.MM.YYYY"
                            minDate="01-01-2023"
                            maxDate="01-01-2040"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            iconSource={require('../assets/date.png')}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,

                                },
                                dateText: {
                                    fontFamily: 'Poppins',
                                    color: '#9A9A9A',
                                    fontSize: 15
                                },
                                dateInput: {
                                    right:0,
                                    borderRadius: 10,
                                    height: 50,
                                    backgroundColor: '#FFF'
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => setDate1(date)}
                        />
                    </View>
                    <View style={{width:Dimensions.get('screen').width > 500 ? 80 : 30}}/>
                    <View>
                        <DatePicker
                            style={{ width:Dimensions.get('screen').width / 2.3, height: 50, borderRadius: 20, fontFamily: 'Poppins', left: -20, marginTop: 10 }}
                            date={date2}
                            androidMode="spinner"
                            mode="date"
                            placeholder="select date"
                            format="DD.MM.YYYY"
                            minDate="01-01-2023"
                            maxDate="01-01-2040"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            iconSource={require('../assets/date.png')}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 10,
                                    top: 4,
                                    marginLeft: 0,

                                },
                                dateText: {
                                    fontFamily: 'Poppins',
                                    color: '#9A9A9A',
                                    fontSize: 15
                                },
                                dateInput: {
                                    borderRadius: 10,
                                    height: 50,
                                    backgroundColor: '#FFF'
                                }
                            }}
                            onDateChange={(date) => setDate2(date)}
                        />
                    </View>
                </View>
                <FlatList
                    style={{ marginTop:40 }}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 800 }}
                    data={giderList}
                    ItemSeparatorComponent={
                        <View style={{height:20}}/>
                    }
                    renderItem={({ item }) => (
                <View style={{ width: Dimensions.get('screen').width - 20, backgroundColor: '#dbd7d7', marginLeft: 10, borderRadius: 20 }}>
                    <Collapse onToggle={(x) => x === true ? setDisplayItem(item.id) : setDisplayItem(0)}>
                        <CollapseHeader>
                        <View style={{ height: displayItem === item.id ? 250 : 90, backgroundColor: '#FFF', borderRadius: 20, width: Dimensions.get('screen').width - 30, left: 5,marginTop:5 }}>
                            <View style={{ display: displayItem === item.id ? "none" : "flex" }}>
                                <View style={{ flexDirection: 'row' }}>
                                  <Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#808080',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>{item["createdUser"].name + " " + item["createdUser"].surname}</Text><Text style={{ marginLeft: 0, marginTop: 16, fontFamily: 'Poppins', height: 40, color: '#808080',position:'absolute',right:90,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item.price} TL</Text>

                                </View>
                                <View style={{ flexDirection: 'row', top: -30, marginLeft: 30 }}>
                                    <Text style={{ marginLeft: 20, marginTop: 25, fontFamily: 'Poppins', height: 40, color: '#000',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Tür: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item.expenseKind === "DAILY" ? "Günlük" : item.expenseKind === "WEEKLY" ? "Haftalık" : item.expenseKind === "YEARLY" ? "Yıllık" : item.expenseKind === "MONTHLY" ? "AYLIK" : ""}</Text></Text><Text style={{ marginTop: 25, fontFamily: 'Poppins', height: 40,position:'absolute',right:90,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Tip: <Text style={{ fontFamily: 'Poppins', color: '#0CBDDE', marginTop: 10, marginLeft: 20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item["expenseType"].name}</Text></Text>

                                </View>
                            </View>
                            <View style={{ display: displayItem === item.id ? "flex" : "none" }}>
                                <View>
                                    <View style={{flexDirection:'row',left:-60}}>
                                    <View style={{ flexDirection: 'row', top: 0, marginLeft: 20 }}>
                                        <Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Tipi:</Text>
                                        
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 15, left:15,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item["expenseType"].name}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row',top:15, marginLeft: 0 }}>
                                        <Text style={{ marginLeft: 40, marginTop: 0, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Türü:
                                        </Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 0, right:0,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item.expenseKind === "DAILY" ? "Günlük" : item.expenseKind === "WEEKLY" ? "Haftalık" : item.expenseKind === "YEARLY" ? "Yıllık" : item.expenseKind === "MONTHLY" ? "AYLIK" : ""}</Text>

                                    </View>
                                    </View>
                                    <View style={{flexDirection:'row',left:-60}}>
                                    <View style={{ flexDirection: 'row', top: -10, marginLeft: 20 }}>
                                        <Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Tutar:</Text>
                                        
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 15, left:5,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item.price} TL</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row',top:5, marginLeft: 0 }}>
                                        <Text style={{ marginLeft: 30, marginTop: 0, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:10,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Kayıt T:
                                        </Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 0, right:0,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>13.01.2023 14:12</Text>
                                    </View>
                                    </View>
                                    <View style={{height:20}}/>
                                    <View style={{flexDirection:'row',left:-40,top:-40}}>
                                    <View style={{ flexDirection: 'row',top:15, marginLeft: 0 }}>
                                        <Text style={{ marginLeft: 50, marginTop: 0, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Ekleyen:
                                        </Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 0, right:0,left:-13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item["createdUser"].name + " " + item["createdUser"].surname}</Text>
                                    </View>
                                    </View>
                                    <View style={{flexDirection:'row',left:-40,top:-40}}>
                                    <View style={{ flexDirection: 'row',top:15, marginLeft: 0 }}>
                                        <Text style={{ marginLeft: 50, marginTop: 0, fontFamily: 'Poppins', height: 40, color: '#000',paddingRight:40,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Harcayan:
                                        </Text>
                                        <Text style={{ fontFamily: 'Poppins', color: '#67C5B5', marginTop: 0, right:0,left:-30,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>{item["theSpendUser"].name + " " + item["theSpendUser"].surname}</Text>

                                    </View>
  
                                    </View>
                                    
                                </View>
                                <View style={{ flexDirection: 'row', top:-20, justifyContent: 'space-between', width: Dimensions.get('screen').width - 70, left: 25 }}>
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 12,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }}>Kaydet</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 12,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14  }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ width: 5 }} />
                                </View>
                                <View style={{ paddingBottom: 10 }} />
                            </View>
                            <View style={{ paddingBottom: 10 }} />
                            </View>
                        </CollapseHeader>
                        <View style={{ paddingBottom: 10 }} />
                        
                    </Collapse>
                    <View style={{ paddingBottom: 5 }} />
                    
                </View>
                    )}/>
            <View style={{height:50}}/>
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
export default GiderListele