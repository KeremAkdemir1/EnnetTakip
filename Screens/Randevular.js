import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import I18n from 'i18n-js'
const Randevular = () => {
    const navigation = useNavigation()
    var currentDay = new Date().getDay()
    var currentMonth = new Date().getMonth() + 1
    const [day, setDay] = useState('Pzt')
    const [month, setMonth] = useState('EYL')
    const [date, setDate] = useState(new Date().getDate())
    const [bigger, setBigger] = useState(1)
    useEffect(() => {

        if (date == 0 || date < 1 || date == -1) {
            console.log(date)
            if (month === 'ARL') {
                setMonth('KAS')
                setDate(30)
            }
            if (month === 'KAS') {
                setMonth('EKI')
                setDate(31)
            }
            if (month === 'EKI') {
                setMonth('EYL')
                setDate(30)
            }
            if (month === 'EYL') {
                setMonth('AGU')
                setDate(31)
            }
            if (month === 'AGU') {
                setMonth('TEM')
                setDate(30)
            }
            if (month === 'TEM') {
                setMonth('HAZ')
                setDate(31)
            }
            if (month === 'HAZ') {
                setMonth('MAY')
                setDate(30)
            }
            if (month === 'MAY') {
                setMonth('NIS')
                setDate(31)
            }
            if (month === 'NIS') {
                setMonth('MAR')
                setDate(30)
            }
            if (month === 'MAR') {
                setMonth('SUB')
                setDate(31)
            }
            if (month === 'SUB') {
                setMonth('OCA')
                setDate(30)
            }
            if (month === 'OCA') {
                setMonth('ARL')
                setDate(31)
            }

        }

    }, [date])
    useEffect(() => {

        if (date > 30) {
            console.log(date)
            if (month === 'ARL') {
                setMonth('OCA')
                setDate(1)
                console.log('test')
            }
            if (month === 'KAS') {
                setMonth('ARL')
                setDate(1)
                console.log('test')
            }
            if (month === 'EKI') {
                setMonth('KAS')
                setDate(1)
                console.log('test')
            }
            if (month === 'EYL') {
                setMonth('EKI')
                setDate(1)
                console.log('test')
            }
            if (month === 'AGU') {
                setMonth('EYL')
                setDate(1)
                console.log('test')
            }
            if (month === 'TEM') {
                setMonth('AGU')
                setDate(1)
                console.log('test')
            }
            if (month === 'HAZ') {
                setMonth('TEM')
                setDate(1)
                console.log('test')
            }
            if (month === 'MAY') {
                setMonth('HAZ')
                setDate(1)
                console.log('test')
            }
            if (month === 'NIS') {
                setMonth('MAY')
                setDate(1)
                console.log('test')
            }
            if (month === 'MAR') {
                setMonth('NIS')
                setDate(1)
                console.log('test')
            }
            if (month === 'SUB') {
                setMonth('MAR')
                setDate(1)
                console.log('test')
            }
            if (month === 'OCA') {
                setMonth('SUB')
                setDate(1)
                console.log('test')
            }
        }
    }, [bigger])


    useEffect(() => {
        console.log(currentMonth)
        if (currentMonth === 1) {
            setMonth("OCA")
        }
        if (currentMonth === 2) {
            setMonth("SUB")
        }
        if (currentMonth === 3) {
            setMonth("MAR")
        }
        if (currentMonth === 4) {
            setMonth("NIS")
        }
        if (currentMonth === 5) {
            setMonth("MAY")
        }
        if (currentMonth === 6) {
            setMonth("HAZ")
        }
        if (currentMonth === 7) {
            setMonth("TEM")
        }
        if (currentMonth === 8) {
            setMonth("AGU")
        }
        if (currentMonth === 9) {
            setMonth("EYL")
        }
        if (currentMonth === 10) {
            setMonth("EKI")
        }
        if (currentMonth === 11) {
            setMonth("KAS")
        }
        if (currentMonth === 12) {
            setMonth("ARL")
        }

        if (currentDay === 1) {
            setDay("Pzt")
        }
        if (currentDay === 2) {
            setDay("Sal")
        }
        if (currentDay === 3) {
            setDay("Çrş")
        }
        if (currentDay === 4) {
            setDay("Prş")
        }
        if (currentDay === 5) {
            setDay("Cum")
        }
        if (currentDay === 6) {
            setDay("Cmt")
        }
        if (currentDay === 7) {
            setDay("Paz")
        }
    }, [])

    const ikionce = (dayparam) => {
        if (day === "Pzt") {
            setDay("Cmt")
        }
        if (day === "Sal") {
            setDay("Paz")
        }
        if (day === "Çrş") {
            setDay("Pzt")
        }
        if (day === "Prş") {
            setDay("Sal")
        }
        if (day === "Cum") {
            setDay("Çrş")
        }
        if (day === "Cmt") {
            setDay("Prş")
        }
        if (day === "Paz") {
            setDay("Cum")
        }
        setDate(date - 2)

    }
    const bironce = () => {
        setDate(date - 1)
        if (day === "Pzt") {
            setDay("Paz")
        }
        if (day === "Sal") {
            setDay("Pzt")
        }
        if (day === "Çrş") {
            setDay("Sal")
        }
        if (day === "Prş") {
            setDay("Çrş")
        }
        if (day === "Cum") {
            setDay("Prş")
        }
        if (day === "Cmt") {
            setDay("Cum")
        }
        if (day === "Paz") {
            setDay("Cmt")
        }
    }
    const birsonra = () => {
        setDate(date + 1)
        setBigger(bigger + 1)
        if (day === "Pzt") {
            setDay("Sal")
        }
        if (day === "Sal") {
            setDay("Çrş")
        }
        if (day === "Çrş") {
            setDay("Prş")
        }
        if (day === "Prş") {
            setDay("Cum")
        }
        if (day === "Cum") {
            setDay("Cmt")
        }
        if (day === "Cmt") {
            setDay("Paz")
        }
        if (day === "Paz") {
            setDay("Pzt")
        }
    }
    const ikisonra = () => {
        setDate(date + 2)
        setBigger(bigger + 2)
        if (day === "Pzt") {
            setDay("Çrş")
        }
        if (day === "Sal") {
            setDay("Prş")
        }
        if (day === "Çrş") {
            setDay("Cum")
        }
        if (day === "Prş") {
            setDay("Cmt")
        }
        if (day === "Cum") {
            setDay("Paz")
        }
        if (day === "Cmt") {
            setDay("Pzt")
        }
        if (day === "Paz") {
            setDay("Sal")
        }
    }
    return (

        <View style={styles.container}>
            <View style={{ top: 50, backgroundColor: '#203A4B', width: Dimensions.get('screen').width - 50, height: Dimensions.get('screen').width > 500 ? 80 : 70, borderTopRightRadius: 30, borderBottomLeftRadius: 30, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    {I18n.t('randevular')}

                </Text>
                <Pressable style={{ position: 'absolute', left: 10, top: Dimensions.get('screen').width > 500 ? 15 : 25 }}>
                    <Image source={require('../assets/map.png')} style={{ width: Dimensions.get('screen').width > 500 ? 35 : 25, height: Dimensions.get('screen').width > 500 ? 35 : 20, resizeMode: 'contain' }} />
                </Pressable>
                <Pressable style={{ right: 0, position: 'absolute', marginRight: 15, top: Dimensions.get('screen').width > 500 ? 15 : 25 }}>
                    <Image source={require('../assets/marker.png')} style={{ width: Dimensions.get('screen').width > 500 ? 35 : 25, height: Dimensions.get('screen').width > 500 ? 35 : 20, resizeMode: 'contain' }} />
                </Pressable>
            </View>
            <View style={{ top: 100, width: Dimensions.get('screen').width - 50, alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Pressable style={{
                    backgroundColor: '#FAFAFA',
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').width / 6 + 30,
                    elevation: 2,
                    borderRadius: 10
                }} onPress={() => ikionce(date)}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{month}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 23 : date - 2 < 0 ? 12 : date - 2 === 0 ? 12 : date - 2 > 0 ? 18 : 18 }}>{date - 2 < 0 ? "Önceki Ay" : date - 2 === 0 ? "Önceki Ay" : date - 2 > 0 ? date - 2 : date - 2}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Light', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{day === "Pzt" ? "Cmt" : day === "Sal" ? "Paz" : day === "Çrş" ? "Pzt" : day === "Prş" ? "Sal" : day === "Cum" ? "Çrş" : day === "Cmt" ? "Prş" : day === "Paz" ? "Cum" : ""}</Text>
                </Pressable>
                <View style={{ width: 10 }} />
                <Pressable style={{
                    backgroundColor: '#FAFAFA',
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').width / 6 + 30,
                    elevation: 2,
                    borderRadius: 10
                }} onPress={() => bironce()}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{month}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 23 : date - 1 < 0 ? 12 : date - 1 === 0 ? 12 : date - 1 > 0 ? 18 : 18 }}>{date - 1 < 0 ? "Önceki Ay" : date - 1 === 0 ? "Önceki Ay" : date - 1 > 0 ? date - 1 : date - 1}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Light', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{day === "Pzt" ? "Paz" : day === "Sal" ? "Pzt" : day === "Çrş" ? "Sal" : day === "Prş" ? "Çrş" : day === "Cum" ? "Prş" : day === "Cmt" ? "Cum" : day === "Paz" ? "Cmt" : ""}</Text>
                </Pressable>
                <View style={{ width: 10 }} />
                <Pressable style={{
                    backgroundColor: '#A9ACAC',
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').width / 6 + 30,
                    elevation: 2,
                    borderRadius: 10
                }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#FFF', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{month}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 18 }}>{date}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Light', color: '#FFF', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{day}</Text>
                </Pressable>
                <View style={{ width: 10 }} />
                <Pressable style={{
                    backgroundColor: '#FAFAFA',
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').width / 6 + 30,
                    elevation: 2,
                    borderRadius: 10
                }} onPress={() => birsonra()}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{month}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 23 : date + 1 > 30 ? 12 : date + 1 === 31 ? 12 : date + 1 < 30 ? 18 : 18 }}>{date + 1 > 30 ? "Sonraki Ay" : date + 1 === 31 ? "Sonraki Ay" : date + 1 < 30 ? date + 1 : date + 1}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Light', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{day === "Pzt" ? "Sal" : day === "Sal" ? "Çrş" : day === "Çrş" ? "Prş" : day === "Prş" ? "Cum" : day === "Cum" ? "Cmt" : day === "Cmt" ? "Paz" : day === "Paz" ? "Pzt" : ""}</Text>
                </Pressable>
                <View style={{ width: 10 }} />
                <Pressable style={{
                    backgroundColor: '#FAFAFA',
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').width / 6 + 30,
                    elevation: 2,
                    borderRadius: 10
                }} onPress={() => ikisonra()}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{month}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 23 : date + 2 > 30 ? 12 : date + 2 === 31 ? 12 : date + 2 < 30 ? 18 : 18 }}>{date + 2 > 30 ? "Sonraki Ay" : date + 2 === 31 ? "Sonraki Ay" : date + 2 < 30 ? date + 2 : date + 2}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Light', color: '#A7AAAC', fontSize: Dimensions.get('screen').width > 500 ? 25 : 14 }}>{day === "Pzt" ? "Çrş" : day === "Sal" ? "Pri" : day === "Çrş" ? "Cum" : day === "Prş" ? "Cmt" : day === "Cum" ? "Paz" : day === "Cmt" ? "Pzt" : day === "Paz" ? "Sal" : ""}</Text>
                </Pressable>
            </View>
            <ScrollView style={{ marginTop: 140 }}>
            <View style={{top:0,width:Dimensions.get('screen').width - 20,borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10,borderColor:'#22C132',elevation:6,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#E5EBDF',width: 50,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
                        <Text style={{fontSize:21,fontFamily:'Poppins',color:'#7A7C7A',textAlign:'center',top:10}}>4</Text>
                    </View>
                    <View style={{top:15,marginLeft:20}}>
                        <Text style={{fontFamily:'Poppins-SemiBold',color:'#7A7C7A',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Mehmet Yılmaz</Text>
                    </View>
                </View>
                <View style={{alignItems:'center',top:10}}>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 20 : 14,fontFamily:'Poppins',color: '#616161',marginLeft:50,marginRight:50}}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                </View>
                <View style={{top:20,width:Dimensions.get('screen').width - 100,left:25,alignItems:'center',backgroundColor:'#FFDEDE',borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40,borderColor:'#FF0606'}}>
                    <View style={styles.notebar}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,fontFamily:'Poppins',top :Dimensions.get('screen').width > 500 ? 0 : 0}}>Not:</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:'#FF0606',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12,fontFamily:'Poppins',left:30,top :Dimensions.get('screen').width > 500 ? 0 : 2}}>Gitmeden 20 dk önce arancak</Text>
                    </View>
                    
                </View>
                <View style={{height:40}}/>
            </View>
            <View style={{height:20}}/>
            <View style={{top:0,width:Dimensions.get('screen').width - 20,borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10,borderColor:'#22C132',elevation:6,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#E5EBDF',width: 50,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
                        <Text style={{fontSize:21,fontFamily:'Poppins',color:'#7A7C7A',textAlign:'center',top:10}}>4</Text>
                    </View>
                    <View style={{top:15,marginLeft:20}}>
                        <Text style={{fontFamily:'Poppins-SemiBold',color:'#7A7C7A',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Mehmet Yılmaz</Text>
                    </View>
                </View>
                <View style={{alignItems:'center',top:10}}>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 20 : 14,fontFamily:'Poppins',color: '#616161',marginLeft:50,marginRight:50}}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                </View>
                <View style={{top:20,width:Dimensions.get('screen').width - 100,left:25,alignItems:'center',backgroundColor:'#FFDEDE',borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40,borderColor:'#FF0606'}}>
                    <View style={styles.notebar}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,fontFamily:'Poppins',top :Dimensions.get('screen').width > 500 ? 0 : 0}}>Not:</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:'#FF0606',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12,fontFamily:'Poppins',left:30,top :Dimensions.get('screen').width > 500 ? 0 : 2}}>Gitmeden 20 dk önce arancak</Text>
                    </View>
                    
                </View>
                <View style={{height:40}}/>
            </View>
            <View style={{height:20}}/>
            <View style={{top:0,width:Dimensions.get('screen').width - 20,borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10,borderColor:'#22C132',elevation:6,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#E5EBDF',width: 50,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
                        <Text style={{fontSize:21,fontFamily:'Poppins',color:'#7A7C7A',textAlign:'center',top:10}}>4</Text>
                    </View>
                    <View style={{top:15,marginLeft:20}}>
                        <Text style={{fontFamily:'Poppins-SemiBold',color:'#7A7C7A',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Mehmet Yılmaz</Text>
                    </View>
                </View>
                <View style={{alignItems:'center',top:10}}>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 20 : 14,fontFamily:'Poppins',color: '#616161',marginLeft:50,marginRight:50}}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                </View>
                <View style={{top:20,width:Dimensions.get('screen').width - 100,left:25,alignItems:'center',backgroundColor:'#FFDEDE',borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40,borderColor:'#FF0606'}}>
                    <View style={styles.notebar}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,fontFamily:'Poppins',top :Dimensions.get('screen').width > 500 ? 0 : 0}}>Not:</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:'#FF0606',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12,fontFamily:'Poppins',left:30,top :Dimensions.get('screen').width > 500 ? 0 : 2}}>Gitmeden 20 dk önce arancak</Text>
                    </View>
                    
                </View>
                <View style={{height:40}}/>
            </View>
            <View style={{height:20}}/>
            <View style={{top:0,width:Dimensions.get('screen').width - 20,borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 10,borderColor:'#22C132',elevation:6,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#E5EBDF',width: 50,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
                        <Text style={{fontSize:21,fontFamily:'Poppins',color:'#7A7C7A',textAlign:'center',top:10}}>4</Text>
                    </View>
                    <View style={{top:15,marginLeft:20}}>
                        <Text style={{fontFamily:'Poppins-SemiBold',color:'#7A7C7A',fontSize:Dimensions.get('screen').width > 500 ? 20 : 16}}>Mehmet Yılmaz</Text>
                    </View>
                </View>
                <View style={{alignItems:'center',top:10}}>
                    <Text style={{fontSize:Dimensions.get('screen').width > 500 ? 20 : 14,fontFamily:'Poppins',color: '#616161',marginLeft:50,marginRight:50}}>Barbaros Mahallesi Halil Rifat Paşa Caddesi No:188, Kat:1 Daire:4 / Bahçelievler</Text>
                </View>
                <View style={{top:20,width:Dimensions.get('screen').width - 100,left:25,alignItems:'center',backgroundColor:'#FFDEDE',borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderRadius: 40,borderColor:'#FF0606'}}>
                    <View style={styles.notebar}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:Dimensions.get('screen').width > 500 ? 18 : 14,fontFamily:'Poppins',top :Dimensions.get('screen').width > 500 ? 0 : 0}}>Not:</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:'#FF0606',fontSize:Dimensions.get('screen').width > 500 ? 18 : 12,fontFamily:'Poppins',left:30,top :Dimensions.get('screen').width > 500 ? 0 : 2}}>Gitmeden 20 dk önce arancak</Text>
                    </View>
                    
                </View>
                <View style={{height:40}}/>
            </View>
            <View style={{height:60}}/>
            </ScrollView>
        </View>
     
    )
}


const styles = StyleSheet.create({
    notebar: {
        width: '100%',
        position: 'absolute',
        backgroundColor:'#FF0606',
        width:Dimensions.get('screen').width > 500 ? 100 : 60,
        height:Dimensions.get('screen').width > 500 ? 30 : 22,
        borderRadius:30,
        left: -1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('screen').width > 500 ? 26 : 16,
        color: '#525252'
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        textAlign: 'center'
    },
    topText: {
        fontFamily: 'Poppins',
        color: '#FFF',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        textAlign: 'center',
        top: 20
    },
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,

        top: 20
    },
    topView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    bottomView: {
        top: 80
    },
})

export default Randevular