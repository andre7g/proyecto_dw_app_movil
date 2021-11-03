import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMedicamentos } from '../hooks/useMedicamentos';
import { MedicamentoCard } from '../components/MedicamentoCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {  width: windowWidth } = Dimensions.get('window'); 

export const HomeScreen = () => {

    const { productos, productosParaGripe, productosParaDCabeza, isLoading} = useMedicamentos();
    const {top} = useSafeAreaInsets();

    if(isLoading){
        return(
            <View style={{ flex:1, justifyContent:'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={70}/>
            </View>
        )
    }
    //console.log(medicamentos[1]?.nombre);

    return (
        <ScrollView>
            <View style={{marginTop: top + 20}}>

                {/* <View style={{height:440}}> */}
                    <Carousel
                        data={ productos }
                        renderItem={ ({item}:any) => <MedicamentoCard medicamento = {item} /> }
                        sliderWidth = { windowWidth }
                        itemWidth = { 300 }
                        inactiveSlideOpacity={0.9}
                    />
                {/* </View> */}
                <HorizontalSlider title="Gripe" medicamentos={ productosParaGripe } />
                <HorizontalSlider title="Dolor de Cabeza" medicamentos={ productosParaDCabeza } />
    


            </View>
        </ScrollView>
    )
}
