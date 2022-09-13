import React from 'react';
import {COLOR_PRIMARY,COLOR_SECONDARY} from '../utils/paleta';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';


export const CardAnuncio = () => {
  return (
    <View style={styles.container}>
        <View>
        <Text style={styles.cardText}>Bienvenido de nuevo {'\n'}que deseas escuchar</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{textAlign: 'center',fontWeight: 'bold',paddingVertical:8,paddingHorizontal:10}}> ahora</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',position:'relative',left:-60}}>
            <Image style={[styles.img,{right:-50}]} source={require('../assest/img/pio3.png')}/>
            <Image style={[styles.img,{right:-50}]} source={require('../assest/img/lol.png')}/>
           
        </View>  
    </View>
  )
}



const styles = StyleSheet.create({

    container:{
        backgroundColor:COLOR_PRIMARY,
        width:320,
        padding: 20,
        borderRadius:30,
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    btn:{
      backgroundColor:COLOR_SECONDARY,
      borderRadius:30,
      width:80,
    },
    img:{
      width: 70,
      height: 90,
      position: 'relative', 
      
    },
    
    cardText:{
      color:'white',
      fontSize: 18,
      fontWeight: '500',
      marginBottom:10,
    }

})