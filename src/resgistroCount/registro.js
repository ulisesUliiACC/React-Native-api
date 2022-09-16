import React, { useEffect, useState } from 'react'
import { SafeAreaView,FlatList,Text,StyleSheet,View} from 'react-native';

import firestore from '@react-native-firebase/firestore';
// import {COLOR_PRIMARY_one, COLOR_PRIMARY,COLOR_SECONDARY } from "../utils/paleta";
// paleta de colores personalizados :)



export const Register =() =>{

    const [data,setData]=useState()

    async function loadData(){
        try{
            const usuarios = await firestore().collection('usuarios').get()
            //console.log(usuarios.docs)
            setData(usuarios.docs)
            // muestra datos en forma de aray en consola
        } catch(e){
                console.log(e)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    //renderizacion de en forma de lista de usuarios  
    function renderItem({item}){
        return (
            <View style={styles.datos}>
                <Text style={styles.datos1}>{item.data().nombre } </Text>
                <Text style={styles.datos1}>{item.data().apellidoP } </Text>
                <Text style={styles.datos1}>{item.data().apellidoM } </Text>
                <Text style={styles.datos1}>{item.data().sexo } </Text>
                <Text style={styles.datos1}>{item.data().edad } </Text>
            </View>
        )
    }
    return(
        <View >
            <Text style={styles.title}>
                Registro de usuarios :3 
            </Text>
            <Text style={styles.colun}>
                lista de usuarios :)
            </Text>
            
                <View>
            <Text style={styles.columna}>
            <FlatList
                    data ={data}
                    renderItem={renderItem}
                    keyExtractor={item =>item.id}                    
                />
            </Text>
            </View>
           
        </View>
    )

    

};

const  styles = StyleSheet.create({
   
    datos:{
        flexDirection:'row',
        padding: 5,
        margin:15,
        borderRadius:7,
        backgroundColor:'#B2B9EA',    
    },
    datos1:{
        fontSize: 17,
        fontFamily: 'Mali ExtraLight',
        color:'black',
    },
    title: {
        textAlign: 'center',
        fontSize:54,
        fontFamily: 'Mali ExtraLight',
        color: 'black',
        padding:10,
    },
    
    colun:{
        padding:10,
        textAlign:'center',
        fontSize:25,
        fontFamily: 'Mali ExtraLight',
        color: 'black',
    },
    
    /*dato:{
        flexDirection:'row',
        padding: 20,
        margin:20,
        borderRadius:7,
        backgroundColor:'red',
        
    },
   */
    columna:{
        textAlign:'center',
        alignItems: 'center',
        margin:15,
        marginTop:10,
        padding:10,
    },
});