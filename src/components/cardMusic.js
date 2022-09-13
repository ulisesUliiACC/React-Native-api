import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import { COLOR_PRIMARY_one } from '../utils/paleta';

export const CardMusic = () => {
  return (
    <View style={styles.contianer}>
        <View style={styles.content}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={styles.img} source={{uri:'https://i.pinimg.com/564x/5d/e0/f2/5de0f21f5ae56b3fa8d8e6d2e5b5411d.jpg'}}/>
                    <View style={{marginLeft:45}}>
                            <Text style={styles.title}> The bristh</Text>
                            <Text> Mr Kity</Text>
                        <View style={[styles.content,{marginTop:10,justifyContent:'space-around'}]}>
                            <View >
                            <Text style={{fontSize:-20,fontWeight: 'bold',right:29}}>100 reproduciones</Text>
                            </View>
                            <Text>album top</Text>
                            
                        </View>
                    </View>
            </View>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    contianer: {
        width: 350,
        backgroundColor: COLOR_PRIMARY_one,
        padding: 14,
        borderRadius:20
    },
    title:{
        fontSize:17,
        fontWeight: 'bold',
    },
    content:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    img:{
        width: 120,
        height: 120,
        borderRadius:20,   
    },

})