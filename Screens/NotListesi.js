
import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Pressable, Dimensions, Image, ScrollView, TextInput,FlatList } from "react-native"
import { useState,useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker-expo'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from "react-native-paper"

const NotListesi = () => {

    const navigation = useNavigation()
    const [display1, setDisplay1] = useState('flex')
    const [data, setData] = useState([])
    const [token, setToken] = useState("")
    const [realData, setRealData] = useState([])
    const [shows, setShows] = useState("CUSTOMER")
    useEffect(() => {
        AsyncStorage.getItem('token').then((val) => {
            setToken("Bearer " + val)
            console.log(val)
    })
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
        fetch("https://ennettakip.com/api/v1/default-note", requestOptions)
          .then(response => response.json())
          .then(result => setData(result))
          .catch(error => console.log('error', error));
    }, [token])
    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch("https://ennettakip.com/api/v1/default-note", requestOptions)
          .then(response => response.json())
          .then(result => setData(result))
          .catch(error => console.log('error', error));
        })
        return unsubscribe
    }, [token,navigation])
    const getData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://ennettakip.com/api/v1/default-note", requestOptions)
          .then(response => response.json())
          .then(result => setData(result))
          .catch(error => console.log('error', error));
    }
    const deleteNote = (id) => {
        console.log(id)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch("https://ennettakip.com/api/v1/default-note/" + id, requestOptions)
            .then((response) =>  {response.status === 204 ? getData() : console.log('none')})
            .then(navigation.navigate('NotListesi'))
            .catch(error => console.log('error', error));

    }
    useEffect(() => {
      
        var newArray = data.filter(function (el) {
            return el.type == shows
        });
        setRealData(newArray)
    }, [data])
    

    const showOrderNotes = () => {
        var newArray = data.filter(function (el) {
            return el.type == "ORDER"
        });
        setRealData(newArray)
        setShows("ORDER")
    } 
    const showCustomerNotes = () => {
        var newArray = data.filter(function (el) {
            return el.type == "CUSTOMER"
        });
        setRealData(newArray)
        setShows("CUSTOMER")
    }
    return(
        <ScrollView>
        <View style={{ marginTop: 100, bottom: 20, left: 0 }}>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: '#525252',
                    fontSize: Dimensions.get('screen').width > 500 ? 30 : 20, left: 0, paddingBottom: 10, textAlign: 'center',top:-20
                }}>
                    Not Listesi
                </Text>
                <View style={{flexDirection:'row',top:-10}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <View style={{paddingBottom:20}}>
            <Pressable onPress={() => navigation.navigate('NotEkle')} style={{ backgroundColor: '#67C5B5', borderRadius:10, height: 50,width:180,marginTop:0,position:'absolute',right:15 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}>Not Ekle</Text></Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20, marginRight: 20,marginTop:50}}>
           
                <View style={{ flex: 1 }}>
                    <Pressable onPress={() => showCustomerNotes()} style={{ backgroundColor: '#67C5B5', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }}>Müşteri Notları</Text></Pressable>
                </View>
                <View style={{ width: 15 }} />
                <View style={{ flex: 1 }}>
                    <Pressable style={{ backgroundColor: '#F28243', borderTopRightRadius: 20, borderBottomLeftRadius: 20, height: 50 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', textAlign: 'center', marginTop: Dimensions.get('screen').width > 500 ? 10 : 13, fontSize: Dimensions.get('screen').width > 500 ? 20 : 14 }} onPress={() =>showOrderNotes()}>Sipariş Notları</Text></Pressable>
                </View>
            </View>

        <View style={{marginLeft:10,marginTop:20}}>
        <FlatList
                    style={{ marginTop:20 }}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    data={realData}
                    ItemSeparatorComponent={
                        <View style={{height:20}}/>
                    }
                    renderItem={({ item }) => (
                        <Collapse onToggle={(x) => x === true ? setDisplay1(item.id) : setDisplay1(0)}>
                        <CollapseHeader>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ backgroundColor: shows === "ORDER" ? '#F28243' : '#67C5B5', width: display1 != item.id ? Dimensions.get('screen').width - 30 : Dimensions.get('screen').width - 205, height: 60,borderRadius:10,flexDirection:'row',zIndex:99,alignItems:'center' }}>
                                <Text style={{fontFamily: display1 != item.id ? 'Poppins' : 'Poppins-Bold',fontSize:Dimensions.get('screen').width > 500 ? 19 : 15,color:'#FFF',marginLeft:15,}}>{item.note}</Text>
                            </View>
    
                                <View>
                                    <Image style={{position:'absolute',right:20,marginTop:8,zIndex:99,display:display1 != item.id ? 'flex' : 'none',width:40,height:40}} source={require('../assets/right.png')}/>
                                </View>
                                </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <View style={{width:Dimensions.get('screen').width - 30,backgroundColor:shows === "ORDER" ? '#F28243' : '#67C5B5',borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,top:-6}}>
                            <View style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width - 60,marginLeft:14,marginTop:20,borderRadius:10,paddingLeft:10,paddingTop:10,paddingRight:3}}>
                                <Text style={{color:'#6A6A6A',fontFamily:'Poppins',paddingTop:5,paddingBottom:10,fontSize:Dimensions.get('screen').width > 500 ? 19 : 15}}>
                                {item.note}
                                </Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <View style={{width:0}}/>
                            <Pressable style={{backgroundColor:'#FFF',width:Dimensions.get('screen').width > 500 ? 100 : 70,height:40,marginLeft:15,marginTop:10,borderRadius:10}} onPress={() => deleteNote(item.id)}>
                                <Text style={{textAlign:'center',marginTop:10,fontFamily:'Poppins',color:shows === "ORDER" ? '#F28243' : '#67C5B5',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Sil</Text>
            
                            </Pressable>
                            <Image style={{position:'absolute',right:20,marginTop:13,zIndex:99,display:display1 === item.id ? 'flex' : 'none',width:40,height:40}} source={require('../assets/up.png')}/>
            
                            </View>
                            <View style={{height:20}}/>
                            
                        </View>
                        </CollapseBody>
                    </Collapse>
                    )}
                    />

    </View>
    </ScrollView>
    )

}



export default NotListesi