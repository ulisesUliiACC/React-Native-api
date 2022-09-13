import React from 'react'; 
import {COLOR_PRIMARY}from '../utils/paleta';
import {CardAnuncio}  from '../components/cardAnuncio';
import {CirculoCategoria} from '../components/circuloCategoria';
import {CardMusic} from '../components/cardMusic';
import {Text,SafeAreaView,ScrollView,FlatList,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
    
    const dataCategory = [
        {
            id: "1",
            icon: "spotify",
            title: "Musica",
            isActive: true,
        },
        {
            id: "2",
            icon: "heart",
            title: "Pagos",
            isActive: false,
        },
        {
            id: "3",
            icon: "heart-alt",
            title: "Me gusta",
            isActive: false,
        },
        {
            id: "4",
            icon: "night-clear",
            title: "Musica",
            isActive: false,
        },
       /* {
            id: "5",
            icon: "spotify",
            title: "Musica",
            isActive: false,
        },*/
    ]

export const  ScreenHome=()=>{
return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.head}>
                    <View>
                        <Text style={styles.name}>Hola de nuevo  Ulises MG</Text>
                        <Text style={{fontSize: 17, color:COLOR_PRIMARY,fontWeight: 'bold',}}>buenas noches!</Text>
                    </View>
                    <Image  style={styles.avatar}
                    source={{
                        uri: 'https://http2.mlstatic.com/D_NQ_NP_675789-MLM50161665084_062022-O.webp'
                    }}/>
                </View>
                
                <View style={{alignItems: 'center'}}>
                    <CardAnuncio/>
                </View>

                <View>
                    <View style={styles.sectionHead}>
                        <Text style={styles.titleCategoria}>Categorias</Text>
                        <Text style={{color:COLOR_PRIMARY}}>ver mas</Text>
                    </View>   
                        
                        <FlatList
                            data={dataCategory}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>(
                            <TouchableOpacity key={item.id}>
                                <CirculoCategoria {...item}/>
                            </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={{marginTop: 20 }}>
                        <View style={styles.sectionHead}>
                            <Text style={styles.titleCategoria}>Mas Musica de autores</Text>
                            <Text style={{color:COLOR_PRIMARY}}>ver mas</Text>
                        </View>  
                        <View style={{alignItems: 'center'}}>
                                <CardMusic/>
                        </View> 
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({

    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'rgba(235,235,235)',
    },
    titleCategoria:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 40
        
    },
    sectionHead:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 10,
    },
    head:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:40,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})