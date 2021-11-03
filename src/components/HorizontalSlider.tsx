import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MedicamentoCard } from './MedicamentoCard';
import { Medicamentos } from '../interfaces/medicamentosInterface';

interface Props {
    title?: string;
    medicamentos: Medicamentos[]
}


export const HorizontalSlider = ({title, medicamentos}:Props) => {
    return (
        <View style={{height:( title ) ? 260 : 220}}>
            {
                title && <Text  style={{ fontSize: 30, fontWeight:'bold',marginLeft: 5}}>{title}</Text>
            }
            <FlatList
                data={ medicamentos }
                renderItem={ ({item}:any) => (
                    <MedicamentoCard medicamento = {item} width={ 140 } height={ 200 } fontSize={15} />
                ) }
                keyExtractor={ ( item ) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}
