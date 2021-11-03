import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { Medicamentos } from '../interfaces/medicamentosInterface';
import { RootStackParams, Navigation } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}


export const DetailScreen = ({ route,navigation }: Props) => {

    const medicamento = route.params;

    const uri = `http://10.0.2.2:17157${medicamento.path}`;


    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source= {{uri}}
                        style={ styles.imageMedicamento }
                    />
                </View>
            </View>
            {/* <View style={styles.marginContainer}>
                 <Icon
                    name="star-outline"
                    color="grey"
                    size={20}
                 />
            </View> */}
            <View style={styles.marginContainer}>
                 <Text style={styles.title}>{ medicamento.nombre }</Text>   
                 <Text style={styles.subtitle}>Q {medicamento.precio}</Text>   
                 <Text style={styles.descripciones}>Vía de Administración: {medicamento.via_Administracion_Producto.via}</Text>   
                 <Text style={styles.descripciones}>Marca: {medicamento.marca.nombre}</Text>   
                 <Text style={styles.descripciones}>Dosis: {medicamento.dosis.nombre}</Text>   
                 <Text style={styles.descripciones}>Cantidad: {medicamento.presentacion.nombre}</Text>   
                 <Text style={styles.descripciones}>Para: {medicamento.funcion_medicamento.nombre}</Text>   
                 <Text style={styles.descripcion}>{medicamento.descripcion}</Text>   
            </View>
            <View style={styles.backButton}> 
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="red"
                        size={60}
                    />
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageMedicamento :{
        flex: 1,
        //borderRadius:18,
        // borderBottomEndRadius: 25
    },
    backButton:{
        position: 'absolute',
        zIndex:999,
        elevation: 9,
        top: 30,
        left: 20
    },
    imageContainer: {
        //sbackgroundColor:'red',
        //overflow:'hidden',
        width:'100%',
        height:screenHeight * 0.6,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 20,
        // borderBottomStartRadius:30,
        // borderBottomEndRadius:30
        
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomStartRadius:50,
        borderBottomEndRadius:50

    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20
    },
    title:{
        fontSize: 25,
        fontWeight:'bold'
    },
    subtitle:{
        fontSize: 20,
        fontWeight:'bold',
        opacity:0.5,
        marginBottom:20
    },
    descripciones:{
        fontSize: 18,
        fontWeight:'bold',
        opacity:0.5,
    },
    descripcion:{
        fontSize: 20,
        fontWeight:'bold',
        marginTop:30,
        paddingBottom:20
    },
});