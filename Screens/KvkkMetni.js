
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, ScrollView,Image } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
const KvkkMetni = () => {
    const [color, setColor] = useState('#9E9999')
    const [color2, setColor2] = useState('#9E9999')
    const [color3, setColor3] = useState('#9E9999')
    const [color4, setColor4] = useState('#9E9999')
    const [color5, setColor5] = useState('#9E9999')
    const [color6, setColor6] = useState('#9E9999')
    const [color7, setColor7] = useState('#9E9999')
    const [color8, setColor8] = useState('#9E9999')
    const onaylandi = () => {
        AsyncStorage.setItem('Kvkk', 'true')
        navigation.navigate('Register')
    }
    const navigation = useNavigation()
    return (

        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.gizlilik}>Gizlilik ve Güvenlik</Text>
                <Text style={styles.cerez}>KVKK, Çerez {'(cookie)'}, Bilgi Güvenliği, İade/Garanti Koşulları ve Kurumsal Politika</Text>
                <View style={{flexDirection:'row',top:40}}>
                    <View style={{flex:5,backgroundColor:'#F28243',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#FECB10',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#67C5B5',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#0CBDDE',height:5}}/>
                    <View style={{flex:5,backgroundColor:'#203A4B',height:5}}/>
                </View>
            </View>
            <ScrollView style={{ marginTop: Dimensions.get('screen').width > 500 ? 320 : 180, height: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor('#F28243') : setColor('#9E9999')}>
                        <CollapseHeader style={{ height:  Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#F28243', width: 15, height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color, marginTop: 15, fontFamily: 'Poppins', height: 50,fontSize: Dimensions.get('screen').width > 500 ? 22 : 14  }}>Bilgi Güvenliği</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: Dimensions.get('screen').width > 500 ? 200 : 240, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#F28243', width: 15, height: Dimensions.get('screen').width > 500 ? 215 : 255, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize:  Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', color: '#989898', marginLeft:13 }}>Ennet Takip en yüksek seviyede sistem güvenliği sağlamaktadır.</Text>
                            <Text style={{ textAlign: 'center', marginTop: 10,fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', color: '#989898', marginLeft:13 }}>Dünya standartlarında ağ, veri ve fiziksel güvenlik koşullarının sağlandığı bir ortamda hizmet sunarken, değişen şartlara göre güvenlik konusundaki politika ve uygulamalarımızı değerlendirerek gerekli güncellemeleri düzenli olarak yapıyoruz.</Text>
                        </CollapseBody>
                    </Collapse>
                </View>

                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor2('#67C5B5') : setColor2('#9E9999')}>
                        <CollapseHeader style={{ height:  Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#67C5B5', width: 15, height:  Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color2, marginTop: 15, fontFamily: 'Poppins', height: 40,fontSize: Dimensions.get('screen').width > 500 ? 22 : 14 }}>SSL</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 150, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#67C5B5', width: 15, height: 165, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 13,fontSize: Dimensions.get('screen').width > 500 ? 18 : 14 }}>Ennet Takip sunucularında kullanılan SSL, kullanıcılarımız ve sistem arasındaki verilerin şifrelenerek güvenli şekilde transferini temin ediyor. Kullanılan şifreleme, bankalarda kullanılan şifreleme standartları ile aynıdır.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>

                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor3('#0CBDDE') : setColor3('#9E9999')}>
                        <CollapseHeader style={{ height: Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#0CBDDE', width: 15, height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color3, marginTop: 15, fontFamily: 'Poppins', height: 40,fontSize: Dimensions.get('screen').width > 500 ? 22 : 14 }}>Kullanıcı Erişimi</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 180, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#0CBDDE', width: 15, height: 195, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 12, fontFamily: 'Poppins', color: '#989898', marginLeft:15,marginRight:0 ,fontSize: Dimensions.get('screen').width > 500 ? 18 : 14}}>Sizin tarafınızdan kullanıcı olarak davet edilmediği sürece, kimsenin firma hesabınıza erişimi sağlanmaz. Sadece, teknik veya sistemsel bir arıza oluşması durumunda, hesabınız içinden vereceğiniz izin üzerine yetkilendirilmiş Ennet Takip personeli destek amacıyla verinize ulaşır.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor4('#FECB10') : setColor4('#9E9999')}>
                        <CollapseHeader style={{ height: Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#FECB10', width: 15, height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color4, marginTop: 15, fontFamily: 'Poppins', height: 40,fontSize:Dimensions.get('screen').width > 500 ? 22 : 14 }}>Kullanıcı Şifreleri</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 180, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#FECB10', width: 15, height: 195, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: Dimensions.get('screen').width > 500 ? 18 : 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 13,marginRight:10 }}>Kullanıcıların güçlü şifre yaratması beklenmektedir ve yarattıkları şifrelerin gizliliğinden kullanıcıların kendileri sorumludur. Çoklu sayıda yanlış giriş yapılması durumunda kullanıcı hesabı bloke edilir. Uzun süre açık kalan oturumlar otomatik olarak kapatılır.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor5('#203A4B') : setColor5('#9E9999')}>
                        <CollapseHeader style={{ height: Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#203A4B', width: 15, height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color5, marginTop: 15, fontFamily: 'Poppins', height: 40,fontSize:Dimensions.get('screen').width > 500 ? 22 : 14 }}>Veri Paylaşımı</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 290, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#203A4B', width: 15, height: 305, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Veri gizliliğini kullanıcı sözleşmemiz çerçevesinde korumayı taahhüt ediyoruz. Kullanıcılarımıza, iş ortaklarımızla birlikte katma değerli hizmetler sunuyoruz. Örneğin, FIT Solutions ile elektronik fatura hizmeti, iyzico ile kredi kartı ile online tahsilat hizmeti sunuyoruz. Bu hizmetleri aktive eden kullanıcılarımızın, bu hizmetleri kullanımı esnasında bu firmalarla doğal olarak bir veri paylaşımı sözkonusudur. Onun dışında, verilerinizi hiçbir kurum, kuruluş veya şahıs ile paylaşmıyoruz.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor6('#F28243') : setColor6('#9E9999')}>
                        <CollapseHeader style={{ height: 70, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#F28243', width: 15, height: 70, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color6, marginTop: 15, fontFamily: 'Poppins', height: Dimensions.get('screen').width > 500 ? 60 : 50,fontSize:Dimensions.get('screen').width > 500 ? 22 : 14 }}>Fiziksel Güvenlik, Ağ Güvenliği ve Güvenlik Duvarı</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 330, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#F28243', width: 15, height: 345, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Ennettakip, Dorabase (Türkiye) sunucularından barındırılmaktadır. 2008 yılında İstanbul'da kurulan Dorabase, bugün EMEA (Avrupa, Orta Doğru ve Afrika) bölgesinin bulut teknolojiler alanında faaliyet gösteren öncü şirketleri arasında yer almaktadır. Web performans ve bulut güvenlik kategorilerine odaklanan Dorabase'in müşterileri arasında Vodafone gibi çok uluslu şirketler ve Pegasus Havayolları, Boyner, Medical Park gibi halka açık şirketler bulunmaktadır.

                                Güvenlik için sunucularımızda Web Application Firewall, VPN, DDoS koruması, Bot yönetim servisleri çalıştırılmaktadır.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor7('#67C5B5') : setColor7('#9E9999')}>
                        <CollapseHeader style={{ height: Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#67C5B5', width: 15, height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color7, marginTop: 15, fontFamily: 'Poppins',height: Dimensions.get('screen').width > 500 ? 60 : 50,fontSize:Dimensions.get('screen').width > 500 ? 22 : 14 }}>Bilgi Güvenliği</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height: 100, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#67C5B5', width: 15, height: 115, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 20,marginRight:20,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Olası teknik problemlere karşı verileriniz günlük olarak yedeklenir ve her bir yedek 2 hafta süreyle saklanır.</Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ width: Dimensions.get('screen').width - 50 }}>
                    <Collapse onToggle={(x) => x === true ? setColor8('#0CBDDE') : setColor8('#9E9999')}>
                        <CollapseHeader style={{height: Dimensions.get('screen').width > 500 ? 60 : 50, backgroundColor: '#e6e3e3', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#0CBDDE', width: 15,height: Dimensions.get('screen').width > 500 ? 60 : 50, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <Text style={{ marginLeft: 30, color: color8, marginTop: 15, fontFamily: 'Poppins',height: Dimensions.get('screen').width > 500 ? 60 : 50,fontSize:Dimensions.get('screen').width > 500 ? 22 : 14 }}>Verileriniz Ennet Takip 'le daha güvende</Text>
                        </CollapseHeader>
                        <CollapseBody style={{ height:  Dimensions.get('screen').width > 500 ? 230 : 250, backgroundColor: '#e6e3e3', borderRadius: 20, borderTopRightRadius: 0, top: -15 }}>
                            <View style={{ backgroundColor: '#0CBDDE', width: 15, height:  Dimensions.get('screen').width > 500 ? 245 : 265, position: 'absolute', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, zIndex: 90, top: -15 }} />
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Poppins', color: '#989898', marginLeft: 13,fontSize:Dimensions.get('screen').width > 500 ? 18 : 14 }}>Ennet Takip ile verileriniz bilgisayarınızda depolanmaz. Böylece bilgisayarınızın bozulması, çalınması ya da kaybolması durumunda dahi verileriniz tamamen güvende kalır. Verilerinizi şirket içinde ya da dışında herhangi bir kişi ile paylaşmanız gereken durumlarda, e-posta ya da USB ile göndermek yerine, verilerinizi paylaşmak istediğiniz kişileri kullanıcı olarak atayarak verilerinize çok daha güvenli erişim sağlayabilirsiniz.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
                <View style={{height:150}}/>
            </ScrollView>
            <View style={styles.bottomView}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={styles.loginButtonCircle} onPress={() => onaylandi()}>
                        <Text style={styles.buttonText} adjustsFontSizeToFit={true}>Onayla</Text>
                    </Pressable>
                    <Pressable style={{
                        backgroundColor: '#F28243', width: Dimensions.get('screen').width / 2 - 30, height: Dimensions.get('screen').width > 500 ? 70 : 50, left: 10, borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Register')}>İptal</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loginButtonCircle: {
        position: "relative",
        top: 0,
        left: -10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#67C5B5",
        width: Dimensions.get('screen').width / 2 - 30,
        height: Dimensions.get('screen').width > 500 ? 70 : 50,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('screen').width > 500 ? 26 : 16,
        color: '#525252'
    },
    loginButtonCircle: {
        position: "relative",
        top: 0,
        left: -10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#67C5B5",
        width: Dimensions.get('screen').width / 2 - 30,
        height: Dimensions.get('screen').width > 500 ? 70 : 50,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 16,
        marginTop: 10,
        textAlign: 'center'
    },
    topText: {
        fontFamily: 'Poppins-Bold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
    },
    ennetTakip: {
        fontFamily: 'Poppins-SemiBold',
        color: '#203A4B',
        fontSize: Dimensions.get('screen').width > 500 ? 40 : 25,
        top: 20,
        left:5
    },
    gizlilik: {
        fontFamily: 'Poppins-SemiBold',
        color: '#525252',
        fontSize: Dimensions.get('screen').width > 500 ? 30 : 20,
        marginTop: 20,
        top: 20
    },
    cerez: {
        fontFamily: 'Poppins',
        color: '#C3C3C3',
        fontSize: Dimensions.get('screen').width > 500 ? 25 : 12,
        marginTop: 20,
        marginLeft:40,
        marginRight:40,
        top: 20
    },
    topView: {
        width: '100%',
        height: Dimensions.get('screen').width > 500 ? 200 : 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    bottomView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
})
export default KvkkMetni