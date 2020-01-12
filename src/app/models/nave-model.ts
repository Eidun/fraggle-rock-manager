import { Tableable } from "./tableable";

export class NaveTable extends Tableable {
    heads: string[];
    data: any[];

    pathMap = {
        'Nave': '/naves',
        'Estacion Espacial': '/estaciones-espaciales'
    }

    constructor(json) {
        super();
        this.heads = ['Nombre', 'Modelo', 'Clase', 'Comandante'];
        this.data = [];
        json.forEach(nave => {
            const naveTable: any = { id: nave.id, path: this.pathMap[nave.clase] };
            naveTable.values = [nave.nombre, nave.modelo, nave.clase, nave.alias_comandante ? nave.alias_comandante : 'Desconocido'];
            this.data.push(naveTable);
        });

    }
}

export class Nave {

    id;
    clase: string;
    imagen: string;
    defaultImagen: string = 'https://webcomicms.net/sites/default/files/clipart/148397/cartoon-spaceship-pictures-148397-9690747.jpg';
    nombre: string;
    modelo: string;
    descripcion: string;
    tripulantes: TripulanteTable;

    constructor(json) {
        this.id = json.id;
        this.clase = json.clase;
        this.imagen = json.imagen;
        this.nombre = json.nombre;
        this.modelo = json.modelo;
        this.descripcion = json.descripcion;
        this.tripulantes = json.tripulantes;
    }
}

class TripulanteTable extends Tableable{

    heads: string[];
    data: any[];

    nave_id: string;
    personaje_id: string;
    alias: string; // TODO
    cargo: string;

    constructor(json) {
        super();
        this.heads = ['Alias', 'Cargo'];
        this.data = [];
        json.forEach(tripulante => {
            const personajeTable: any = { id: tripulante.id, path: '/personajes' };
            personajeTable.values = [tripulante.alias, tripulante.nivel_poder, tripulante.status, tripulante.numero_miembros];
            this.data.push(personajeTable);
        });
    }
}