import { View, Text, StyleSheet, Dimensions,ScrollView,Image, Pressable } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col,Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'

const FirmaCagriGecmisi = () => {
  const navigation = useNavigation()
  const tableHead = ['Sıra','Kaydet','Arayan', 'Dinle', 'Cihaz', 'Yön', 'Süre','Firma', 'Tarih']
  const widthArr = [120,120,120, 120, 120, 120, 120, 120, 120]
  const tableData = [
    ['1','save','0532 345 56 78','buton','android','giden','00:01:10','Akar','21.11.2022 22:57:14'],
    ['2','save','0532 345 56 78','buton','android','giden','00:01:10','Duru','21.11.2022 22:57:14'],
    ['3','save','0532 345 56 78','buton','android','giden','00:01:10','Vip plus','21.11.2022 22:57:14'],
    ['4','save','0532 345 56 78','buton','android','giden','00:01:10','Beyoğlu','21.11.2022 22:57:14'],
    ['5','save','0532 345 56 78','buton','android','giden','00:01:10','Kent','21.11.2022 22:57:14'],
    ['6','save','0532 345 56 78','buton','android','giden','00:01:10','Çağrı','21.11.2022 22:57:14'],
    ['7','save','0532 345 56 78','buton','android','giden','00:01:10','Akpınar','21.11.2022 22:57:14'],
    ['8','save','0532 345 56 78','buton','android','giden','00:01:10','Güven','21.11.2022 22:57:14'],

  ];
    const imageElement = () => (
      <Image source={require('../assets/voiceOn.png')} style={{width:20,height:20,marginLeft:50}}/>
    );
    const deviceImageElement = () => (
      <Image source={require('../assets/android.png')} style={{width:35,height:35,marginLeft:50,resizeMode:'contain'}}/>
    );
    const callImageElement = () => (
      <Image source={require('../assets/phone.png')} style={{width:20,height:20,marginLeft:50,resizeMode:'contain'}}/>
    );
    const saveImageElement = () => (
      <Image source={require('../assets/register.png')} style={{width:30,height:30,marginLeft:30,resizeMode:'contain'}}/>
    );
    return (
        <View style={styles.container}>

            <View style={{ top: 40, alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.topText}>
                    Arama Gecmisi
                </Text>
                <View style={{flexDirection:'row',top:0}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View> 
            <View style={{top:130,left:0,position:'absolute',marginTop:10}}>
                <Text style={{fontFamily:'Poppins',color:'#C0BEBE',left:20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Müşteri</Text>
                <Text style={{fontFamily:'Poppins-SemiBold',color:'#525252',left:20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14}}>Mehmet Yılmaz</Text>
                <View style={{backgroundColor:'#EAEAEA',height:2,width:Dimensions.get('screen').width,top:10}}/>
            </View>
            <View style={{top:150}}>
            <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table >
              {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell style={{width:120}} key={cellIndex} data={cellIndex === 1 ? saveImageElement() : cellIndex === 3 ? imageElement() : cellIndex === 4 ? deviceImageElement() : cellIndex === 5 ? callImageElement() : cellData} textStyle={styles.text}/>
                    
                  ))
                  
                }
              </TableWrapper>
              
            ))
          }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left:5
    },
    topView: {
        width: '200%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    topText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        textAlign: 'center',
        top: -20
    },
    container: { flex: 1,  paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#D9D9D9',fontFamily:'Poppins',borderTopLeftRadius:20,borderTopRightRadius:20 },
    text: { textAlign: 'center',fontFamily:'Poppins',width:120 ,fontSize:Dimensions.get('screen').width > 500 ? 16 : 14},
    dataWrapper: { marginTop: -1 },
    row: { flexDirection: 'row',backgroundColor:'#F3F3F3',height:50},
})
export default FirmaCagriGecmisi