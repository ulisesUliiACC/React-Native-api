import React, { useEffect, useState } from 'react'
import { SafeAreaView,FlatList,Text,StyleSheet,View} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {COLOR_PRIMARY_one, COLOR_PRIMARY,COLOR_SECONDARY } from "../utils/paleta";



export const Register =() =>{

    const [data,setData]=useState()

    async function loadData(){
        try{
            const usuarios = await firestore().collection('usuarios').get()

            console.log(usuarios.docs)
            setData(usuarios.docs)

        } catch(e){
                console.log(e)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    //renderizacion de lista de usuarios  
    function renderItem({item}){
        return (
            <View style={styles.datos}>
                <Text style={styles.datos1}>{item.data().nombre } </Text>
                <Text style={styles.datos1}>{item.data().apellidoP } </Text>
                <Text style={styles.datos1}>{item.data().apellidoM } </Text>
                <Text style={styles.datos1}>{item.data().cuidad } </Text>
                <Text style={styles.datos1}>{item.data().sexo} </Text>
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
            <Text style={styles.columna}>
            <FlatList
                    data ={data}
                    renderItem={renderItem}
                    keyExtractor={item =>item.id}                    
                />
            </Text>
        </View>
    )

    

};

const styles = StyleSheet.create({
    main:{
        flex: 1,
       
    },
    datos:{
        flexDirection:'row',
        
        padding: 5,
        margin:5,
        borderRadius:7,
        backgroundColor:'#B2B9EA',
        
            
        
        
    },
    datos1:{
        fontSize: 20,
        fontFamily: 'Mali ExtraLight',
        color:'black',
        justifyContent: 'center',
        position: 'relative', 
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    head:{
        padding: 25,
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
    columna:{
        margin:15,
        marginTop:10,
        padding:10,
    },
});