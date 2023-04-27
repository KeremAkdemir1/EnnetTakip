import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView, FlatList } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const AdresListesi = () => {

    const [display, setDisplay] = useState(0)
    const navigation = useNavigation()
    const [Addresses, setAddresses] = useState([])
    const [token, setToken] = useState("")
    useEffect(() => {
      
        AsyncStorage.getItem('token').then((val) => {
            setToken("Bearer " + val)
        });
    }, [])
    useEffect(() => {
      
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://ennettakip.com/api/v1/customer-address/customer/1",requestOptions)
          .then(response => response.json())
          .then(result => setAddresses(result))
          .catch(error => console.log('error', error));
    }, [token])
    
    return (
        <View>
            <View style={styles.topView}>
                <Text style={styles.topText}>
                    Adres Listesi
                </Text>
                <View style={{flexDirection:'row',top:40}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{ marginTop: 110, left: 0, position: 'absolute',flexDirection:'row' }}>
                <View>
                <Text style={{ fontFamily: 'Poppins', color: '#C0BEBE', left: 20, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Müşteri</Text>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252', left: 20, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Mehmet Yılmaz</Text>
                <View style={{ backgroundColor: '#EAEAEA', height: 2, width: Dimensions.get('screen').width, top: 10 }} />
                </View>
                <Pressable style={{right:20,position:'absolute',flexDirection:'row',top:10}} onPress={() => navigation.navigate('AdresEkle')}>
                    <Image style={{width:40,height:40}} source={require('../assets/addAddress.png')}/>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252',top:10, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Adres Ekle</Text>
                </Pressable>
            </View>
            <FlatList
                    style={{ marginTop:200 }}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    data={Addresses}
                    ItemSeparatorComponent={
                        <View style={{height:20}}/>
                    }
                    renderItem={({ item }) => (
                        <View style={{ width: Dimensions.get('screen').width - 20, backgroundColor: '#dbd7d7', marginLeft: 10, borderRadius: 20 }}>
                             <Collapse onToggle={(x) => x === true ? setDisplay(item.id) : setDisplay(0)}>
                        <CollapseHeader style={{backgroundColor: '#FFF', borderRadius: 20, width: Dimensions.get('screen').width - 50, left: 15, marginTop: 20,height:display === item.id ? 'auto' : 'auto'}}>
                            <View>

                                <Image source={require('../assets/defaultAddress.png')} style={{ position: 'absolute', width: 30, height: 30, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} /><Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#808080', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>{item.title}</Text>
                            </View>
                            <Text style={{ marginLeft: 50, top: -10, fontFamily: 'Poppins', height: 40, color: '#C0BABA', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Açıklama: Babası</Text>
                            <Text style={{ marginLeft: 50, top: -20, fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 17 : 14,marginRight:50 }}>{item["mahalle"].mahalleAdi} {item.street} Caddesi No:{item.buildingNumber}, Kat:{item.floorNumber} Daire:{item.buildingNumber} {item["il"].ilAdi} / {item["ilce"].ilceAdi}</Text>
                            <View style={{ width: Dimensions.get('screen').width - 130, marginLeft: 25, backgroundColor: '#FFDEDE', borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40, borderColor: '#FF0606', height: Dimensions.get('screen').width > 500 ? 30 : 25 }}>
                                <View style={styles.notebar}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', top: Dimensions.get('screen').width > 500 ? 0 : 0 }}>Not:</Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'center', color: '#FF0606', fontSize: Dimensions.get('screen').width > 500 ? 17 : 12, fontFamily: 'Poppins', left: 30, top: Dimensions.get('screen').width > 500 ? 0 : 2 }}>{item.note}</Text>
                                </View>
                            </View>
                            <View style={{height:20}}/>
                            <View style={{display:display === item.id ? "flex" : "none"}}>
                            <View style={styles.date}>
                                <Text style={{ left: 20, fontFamily: 'Poppins-SemiBold', top: 15, color: '#808080', fontSize: 15 }}>Kayıt T:</Text>
                                <Text style={{ fontFamily: 'Poppins', top: 15, color: '#696969', fontSize: 15 }}>13.01.2023</Text>
                                <Text style={{ right: 20, fontFamily: 'Poppins', top: 15, color: '#696969', fontSize: 15 }}>14:12:59</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 30,justifyContent:'space-between',width:Dimensions.get('screen').width - 70,left:7,paddingBottom:10 }}>
                                <View>
                                    <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 80, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 16 }}>Kaydet</Text></Pressable>
                                </View>
                         
                                <View>
                                    <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 70, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 16 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                </View>
                           
                                <View>
                                    <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 80, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 16 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                </View>
                              
                                <View>
                                    <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, width: 80, height: 50, marginLeft: 5 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 13, textAlign: 'center', marginTop: 16 }} onPress={() => navigation.goBack()}>Varsayılan</Text></Pressable>
                                </View>
                            </View>
                            </View>
                        </CollapseHeader>
                    </Collapse>
                    <View style={{ width: Dimensions.get('screen').width - 70, height: display === item.id ? 20 : 20 }} />
                </View>
                    )}
               />
               </View>
                   
    )
}

const styles = StyleSheet.create({
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: Dimensions.get('screen').width - 80,
        elevation: 6,
        borderRadius: 10,
        marginLeft: 15,
        height: 50,
        backgroundColor: '#FFF'
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
    notebar: {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#FF0606',
        top: -1,
        width: Dimensions.get('screen').width > 500 ? 100 : 60,
        height: Dimensions.get('screen').width > 500 ? 30 : 22,
        borderRadius: 30,
        left: -1,
    },
})
export default AdresListesi