import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, LogBox, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Medicamentos } from '../interfaces/medicamentosInterface';


interface Props{
    medicamento: Medicamentos;
    height?: number;
    width?: number;
    fontSize?: number;
}

export const MedicamentoCard = ({ medicamento, height = 420, width = 300, fontSize=30 }:Props) => {

    const uri = `http://10.0.2.2:17157${medicamento.path}`;
    const navigation = useNavigation();
    //
    return (
        <TouchableOpacity 
        onPress={ () => navigation.navigate('DetailScreen' as never, medicamento as never) }
        activeOpacity={0.91}
        style={{
            width,
            height,
            marginHorizontal: 5,
            // paddingBottom: 20,
            // paddingHorizontal: 5
        }}>
            
            <View style={ styles.imageContainer }>
                <Image
                    source= {{uri}}
                    style={ styles.image }
                >
                </Image>
            </View>
            <Text style={{ marginTop:20, textAlign:'center',fontSize,margin:5,fontFamily:'Lobster',fontWeight: "bold"}}>{medicamento.nombre}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image :{
        flex: 1,
        borderRadius:18

    },
    imageContainer:{
        flex:1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 20,
    },
    text:{
    }
});