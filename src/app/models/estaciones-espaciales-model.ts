import { Tableable } from "./tableable";

export class EstacionEspacialTable extends Tableable {
    heads: string[];
    data: any[];

    pathMap = {
        'Nave': '/naves',
        'Lugar': '/lugares'
    }

    constructor(json) {
        super();
        this.heads = ['Nombre', 'Tipo'];
        this.data = [];
        json.forEach(estacion => {
            let pathEstacion = this.pathMap[estacion.clase];
            if (!pathEstacion) {
                pathEstacion = '/estaciones'
            }
            const estacionTable: any = { id: estacion.nombre, path: pathEstacion };
            estacionTable.values = [estacion.alias, estacion.clase];
            this.data.push(estacionTable);
        });
    }


}

export class EstacionEspacial {

    id;
    clase: string;
    nombre: string;
    constructor(json) {
        this.id = json.id;
        this.nombre = json.nombre;
    }
}