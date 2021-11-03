import { useEffect, useState } from 'react';
import clinicaDB from '../api/medicamentos';
import { MedicamentosInterface, Medicamentos } from '../interfaces/medicamentosInterface';

interface MedicamentosSatate {
    productos : Medicamentos[]
    productosParaGripe : Medicamentos[]
    productosParaDCabeza: Medicamentos[]
}


export const useMedicamentos = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ medicamentosSatate, setMedicamentosSatate] = useState<MedicamentosSatate>({
        productos:[],
        productosParaGripe:[],
        productosParaDCabeza:[]
    })

    const getMedicamentos = async () =>{
       const medicamentosPromise = clinicaDB.get<MedicamentosInterface>('/Productos');
       const productosParaGripePromise = clinicaDB.get<MedicamentosInterface>('/Productos/GetProductosActivosByFuncion/1');
       const productosParaDCabezaPromise = clinicaDB.get<MedicamentosInterface>('/Productos/GetProductosActivosByFuncion/3');

        const res = await Promise.all([ 
            medicamentosPromise, 
            productosParaGripePromise,
            productosParaDCabezaPromise 
        ]);

        setMedicamentosSatate({
            productos: res[0].data.data,
            productosParaGripe: res[1].data.data,
            productosParaDCabeza: res[2].data.data
        })

        setIsLoading(false);
    }



    useEffect(() => {
        getMedicamentos();
    }, [])

    return {
        ...medicamentosSatate,
        isLoading
    }
}
