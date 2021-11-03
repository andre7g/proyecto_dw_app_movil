export interface MedicamentosInterface {
    status:  number;
    mensaje: string;
    data:    Medicamentos[];
}

export interface Medicamentos {
    id:                             number;
    nombre:                         string;
    descripcion:                    string;
    estados_Id:                     number;
    estados:                        Estados;
    via_Administracion_Producto_Id: number;
    via_Administracion_Producto:    Via_administracion_producto;
    marca_Id:                       number;
    marca:                          Marca;
    dosis_Id:                       number;
    dosis:                          Dosis;
    presentacion_Id:                number;
    presentacion:                   Presentacion;
    path:                           string;
    precio:                         number;
    funcion_medicamento_Id:         number;
    funcion_medicamento:            Funcion_medicamento;
}

export interface Via_administracion_producto {
    id:          number;
    via:      string;
    descripcion: string;
    estados:     Estados;
}

export interface Marca {
    id:          number;
    nombre:      string;
    estados:     Estados;
}

export interface Presentacion {
    id:          number;
    nombre:      string;
    descripcion: string;
    estados:     Estados;
}

export interface Dosis {
    id:           number;
    nombre?:      string;
    estados_Id:   number;
    estados:      Estados;
    descripcion?: string;
    via?:         string;
}

export interface Estados {
    id:          number;
    estado:      string;
    descripcion: string;
}

export interface Funcion_medicamento {
    id:          number;
    nombre:      string;
    estados:     Estados;
}