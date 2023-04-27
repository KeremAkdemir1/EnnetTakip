import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView,FlatList } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const TelefonListesi = () => {

    const [display, setDisplay] = useState('flex')
    const navigation = useNavigation()
    const [token, setToken] = useState("")
    useEffect(() => {

        AsyncStorage.getItem('token').then((val) => {
            setToken("Bearer " + val)
        });
    }, [])
    const [phones, setPhones] = useState([])
    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCVlBFNU4weF83R0xDYjFtdUM3VVZWbThFVXhqcGxxMk5lelE5ZXpmVG9zIn0.eyJleHAiOjE2ODEwNjg5MTQsImlhdCI6MTY4MTA2NzExNCwianRpIjoiODk0ODBjNDktZTVlZi00ZTRmLWFmM2YtMDFhNmQ0MTAwYTViIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmVubmV0dGFraXAuY29tL3JlYWxtcy9lbm5ldCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxMzkzNzcwMC1iZmI1LTQ3N2EtYmRiYy04ZTEzNDk0ZTRlZTEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZXQtdGFraXAiLCJzZXNzaW9uX3N0YXRlIjoiYWQxYjBmOGUtM2YzYS00ZmE1LWJjOWUtZDY4M2JiNmY1ZjhlIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtZW5uZXQiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfSwibmV0LXRha2lwIjp7InJvbGVzIjpbIlVTRVIiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIGJ1c2luZXNzVVVJRCIsInNpZCI6ImFkMWIwZjhlLTNmM2EtNGZhNS1iYzllLWQ2ODNiYjZmNWY4ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoia2VyZW0gYWtkZW1pciIsInByZWZlcnJlZF91c2VybmFtZSI6IjU0Njg5NTY0OTkiLCJnaXZlbl9uYW1lIjoia2VyZW0iLCJmYW1pbHlfbmFtZSI6ImFrZGVtaXIiLCJidXNpbmVzc1VVSUQiOiJlYTkyNzVkNy1jODk4LTQ4MTItOWNhZS02MjQ4ZTg4ZDYwYWYiLCJlbWFpbCI6ImtlcmVtQG1haWwuY29tIn0.nAFk2wldrqE1ZN3BC9bOfSJj6hUvp6pkZgBiq41eVWQu-x0LSYETxPPRRC82nsDMZ7_NVfZEmIu5J606LymcIDzGYMohSpRjjRXZ8uFXRayVzjUbpK6AgXpHYoqVS1YnncAAwem1N0mRvDEx6cQ0I0ujqhj1JSqDZ9fY93Vsp7CPNMznotya-SoLeHudupzrh00OhNmHpxC1iiyNxWO9_2yRj9js7UeXilNiygfdpoNSwnBCewaR4_Vtq0ZcyvlqqnXdMGuJL5m4HStZ88m3hS68exkeiJkR8QFCq5CoOvmCOmtxbJiSYGfJWPMmhpOhG3k2Dh9Oi8O9mZJ-a-3Dwg");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://ennettakip.com/api/v1/customer/4", requestOptions)
            .then(response => response.json())
            .then(result => setPhones(result.contacts))
            .catch(error => console.log('error', error));


    }, [])

    return (
        <View>
            <View style={{ top: 70, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Telefon Listesi
                </Text>
                <View style={{ flexDirection: 'row', top: 0 }}>
                    <View style={{ flex: 5, backgroundColor: '#F28243', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#FECB10', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#67C5B5', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#0CBDDE', height: 5 }} />
                    <View style={{ flex: 5, backgroundColor: '#203A4B', height: 5 }} />
                </View>
                <View />
            </View>
            <View style={{ marginTop: 160, left: 0, position: 'absolute', flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins', color: '#C0BEBE', left: 20, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Müşteri</Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252', left: 20, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Mehmet Yılmaz</Text>
                    <View style={{ backgroundColor: '#EAEAEA', height: 2, width: Dimensions.get('screen').width, top: 10 }} />
                </View>
                <Pressable style={{ right: 20, position: 'absolute', flexDirection: 'row', top: 10 }} onPress={() => navigation.navigate('TelefonEkle')}>
                    <Image style={{ width: Dimensions.get('screen').width > 500 ? 50 : 35, height: Dimensions.get('screen').width > 500 ? 50 : 35 }} source={require('../assets/phonelist.png')} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#525252', top: 10, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Telefon Ekle</Text>
                </Pressable>
            </View>

            <FlatList
                style={{ marginTop: 230 }}
                scrollEnabled={true}
                contentContainerStyle={{ paddingBottom: 200 }}
                data={phones}
                ItemSeparatorComponent={
                    <View style={{ height: 20 }} />
                }
                renderItem={({ item }) => (
                    <View style={{ width: Dimensions.get('screen').width - 20, backgroundColor: '#dbd7d7', marginLeft: 10, borderRadius: 20 }}>
                        <Collapse onToggle={(x) => x === true ? setDisplay('none') : setDisplay('flex')}>
                            <CollapseHeader style={{ height: 100, backgroundColor: '#FFF', borderRadius: 20, width: Dimensions.get('screen').width - 50, left: 15, marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../assets/defaultAddress.png')} style={{ position: 'absolute', width: 30, height: 30, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} /><Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#808080', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>{item.fullName}</Text><Text style={{ marginLeft: 50, marginTop: 15, fontFamily: 'Poppins', height: 40, color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>{item.phone}</Text>
                                </View>
                                <Text style={{ marginLeft: 50, top: -10, fontFamily: 'Poppins', color: '#C0BABA', fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Açıklama: {item.note}</Text>

                            </CollapseHeader>
                            <CollapseBody style={{ height: 140, backgroundColor: '#FFF', borderRadius: 20, borderTopRightRadius: 0, top: -28, width: Dimensions.get('screen').width - 50, left: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={styles.date}>
                                        <Text style={{ left: Dimensions.get('screen').width > 500 ? 45 : 5, fontFamily: 'Poppins-SemiBold', top: 12, color: '#808080', fontSize: Dimensions.get('screen').width > 500 ? 16 : 12 }}>Kayıt T:</Text>
                                        <Text style={{ fontFamily: 'Poppins', left: 0, top: 13, color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 15 : 11 }}>13.01.2023</Text>
                                        <Text style={{ right: Dimensions.get('screen').width > 500 ? 50 : 0, fontFamily: 'Poppins', top: 13, color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 15 : 11 }}>14:12:59</Text>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={styles.date2}>
                                        <Text style={{ left: Dimensions.get('screen').width > 500 ? 45 : 5, fontFamily: 'Poppins-SemiBold', top: 12, color: '#808080', fontSize: Dimensions.get('screen').width > 500 ? 16 : 12 }}>Onay T:</Text>
                                        <Text style={{ fontFamily: 'Poppins', left: 0, top: 13, color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 15 : 11 }}>13.01.2023</Text>
                                        <Text style={{ right: Dimensions.get('screen').width > 500 ? 50 : 0, fontFamily: 'Poppins', top: 13, color: '#696969', fontSize: Dimensions.get('screen').width > 500 ? 15 : 11 }}>14:12:59</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: Dimensions.get('screen').width - 70, left: 7 }}>
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: 12 }}>Kaydet</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: 12 }} onPress={() => navigation.goBack()}>Sil</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: 13 }} onPress={() => navigation.goBack()}>Düzenle</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ flex: 5, backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 13, textAlign: 'center', marginTop: 14 }} onPress={() => navigation.goBack()}>Onayla</Text></Pressable>
                                    </View>
                                    <View style={{ width: 5 }} />
                                    <View style={{ flex: 5 }}>
                                        <Pressable style={{ backgroundColor: '#67C5B5', borderRadius: 10, height: 45 }}><Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: Dimensions.get('screen').width > 500 ? 18 : 11, textAlign: 'center', marginTop: 14 }} onPress={() => navigation.goBack()}>Varsayılan</Text></Pressable>
                                    </View>
                                </View>
                            </CollapseBody>
                        </Collapse>
                        <View style={{ width: Dimensions.get('screen').width - 70, height: display === 'flex' ? 20 : 0 }} />
                    </View>
                )}
            />

            <View style={{ height: 20 }} />

            <View style={{ height: 20 }} />

            <View style={{ height: 100 }} />

        </View>
    )
}

const styles = StyleSheet.create({
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
        marginLeft: 15,
        height: 40,
        backgroundColor: '#FFF',
        marginRight: 5
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
        top: -20
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
})
export default TelefonListesi