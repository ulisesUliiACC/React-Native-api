import React from 'react'; 
import AntDesing from 'react-native-vector-icons/AntDesign';
import{COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import {SafeAreaView, StyleSheet, View,Text,Image,TouchableOpacity, Dimensions } from 'react-native';
import { transform } from '@babel/core';
const {height,width}=Dimensions.get('window');

export const WelcomeScreen=()=>{
    return(
        
        <SafeAreaView style={styles.main}>
            <View style={styles.head}>
                <Text style={styles.title}>Hola {'\n'}Usuario</Text>
                <Image style={styles.img} source={require('../assest/img/pio3.png')} />
            </View>

            <View style={styles.descrip}>
                <View style={styles.ovalado}/>
                <Text style={{textAlign: 'center',fontSize: 25,fontWeight:'500'}}>Hola pedaso de {'\n'}animal</Text>
                <Text style={styles.meta}>Donde has estado ! Vamos ha escuchar<Text style={{color:COLOR_PRIMARY,fontWeight:'bold'}} >{'\n'} nuetra Musica!!</Text></Text>

                <TouchableOpacity style={styles.btnStar}>
                    <AntDesing name='rightcircle'style={styles.circleIcon} />
                    <Text style={styles.textBtn}> vamos en camino</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        
    );
};


const styles=StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: COLOR_PRIMARY

    },
    ovalado:{
        width: width - 110,
        height: 150,
        backgroundColor: COLOR_SECONDARY,
        borderRadius: 1500,
        position: 'absolute',	
        top:-20, 
        transform:[
            {scaleX: 2}
        ]
    },
    textBtn:{
        textAlign:'center',
        position: 'relative',	
        left:-20,
        color:'write',
        fontSize:20,
        fontWeight:'500'
    },
    circleIcon:{
      //  backgroundColor: COLOR_SECONDARY,
        color:'dark',
        borderRadius:50,
        margin: 10,
        position: 'relative',
        fontSize: 50,
        padding:-20,
        left : -40,
    },
    btnStar:{
        flexDirection: 'row',
        marginTop:40,
        alignItems:'center',
        backgroundColor: COLOR_PRIMARY,
        paddingHorizontal:40,
        borderRadius:80
    },
    meta:{
        color : 'white',
        fontSize :20,
        textAlign: 'center',
        marginTop: 30,
    },
    descrip:{
        padding: 20,
        height,
        alignItems: 'center',
        backgroundColor: COLOR_SECONDARY,
        position: 'relative',
        top: 350

    },
    
    head:{
        padding: 25,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff'
    },
    img: {
        position: 'absolute',
        top: 29,
        left: 42,
    }

})
