import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { COLOR_PRIMARY } from '../utils/paleta';
import   Fontisto from  'react-native-vector-icons/Fontisto';
 
export const  CirculoCategoria = ({title,icon,isActive}) => {
  return (
    <View style={styles.container}>
        <View style={[styles.circle,isActive ? { backgroundColor: COLOR_PRIMARY} : {backgroundColor:'cdcdcd'}]}>
            <Fontisto style={{padding:20,fontSize: 25}}name={icon}/>
        </View>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        width: 100,
        alignItems: 'center',
        height:110,
    },
    title:{
        textAlign: 'center',
        fontWeight:'500'

    },
    circle:{
        borderRadius: 50,
        marginBottom: 10,

    }
})