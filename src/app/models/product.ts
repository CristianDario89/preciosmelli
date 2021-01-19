export class Product {
    $key: string;
    id: number;
    name: string;
    direccion: string;
    localidad: string;
    telefono: number;
    prestado: string;
    tipo: string;
    ruta: string;
    cantidad: string;
    semaforo: string;
    observacion: string;
    price: number;
}
export interface Cliente {
    id: number;
    name: string;
    producto: string;
    cantidad: string;
    prestado: string; 
    precio: any;
}