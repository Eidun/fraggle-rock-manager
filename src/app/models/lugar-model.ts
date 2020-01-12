import { Tableable } from "./tableable";
import { Entidad } from './entidad-model';

export class LugarTable extends Tableable {
    heads: string[];
    data: any[];
    
    pathMap = {
        'Planeta': '/planetas',
        'Ciudad': '/ciudades',
        'Estacion Espacial': '/estacion_espacial',        
    }

    constructor(json) {
        super();
        this.heads = ['Nombre', 'Clase', 'Sector', 'Sistema'];
        this.data = [];
        json.forEach(lugar => {
            const lugarTable: any = { id: lugar.id, path: this.pathMap[lugar.clase] || '/lugares' };
            lugarTable.values = [lugar.nombre, lugar.clase, lugar.sector, lugar.sistema];
            this.data.push(lugarTable);
        });
    }

}

export class Lugar {

    id;
    nombre: string;
    sector: string;
    sistema: string;
    imagen: string;
    defaultImagen: string = 'https://static.thenounproject.com/png/1559121-200.png'
    nivelTecnologico: string;
    nivelSeguridad: string;
    poblacion: string;
    descripcion: string;
    dominadoPor: Entidad;
    clase: string;
    constructor(json) {
        this.id = json.id;
        this.nombre = json.nombre || 'Desconocido';
        this.sector = json.sector  || 'Desconocido';
        this.sistema = json.sistema  || 'Desconocido';
        this.nivelTecnologico = json.nivel_tecnologico  || 'Desconocido';
        this.nivelSeguridad = json.nivel_seguridad  || 'Desconocido';
        this.poblacion = json.poblacion  || 'Desconocido';
        this.descripcion = json.descripcion  || 'Desconocido';
        this.dominadoPor = json.dominado_por  || 'Desconocido';
        this.clase = json.clase  || 'Desconocido';
        this.imagen = json.imagen;
    }
}