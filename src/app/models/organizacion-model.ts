import { Tableable } from "./tableable";
import { Entidad } from './entidad-model';
import { Personaje, PersonajeTable } from './personaje-model';

export class OrganizacionTable extends Tableable {
    heads: string[];
    data: any[];

    constructor(json) {
        super();
        this.heads = ['Alias', 'Nivel de poder', 'Status', 'Número de miembros'];
        this.data = [];
        json.forEach(organizacion => {
            const organizacionTable: any = { id: organizacion.id, path: '/organizaciones' };
            organizacionTable.values = [organizacion.alias, organizacion.nivel_poder, organizacion.status, organizacion.numero_miembros];
            this.data.push(organizacionTable);
        });
    }


}

export class Organizacion extends Entidad {

    status: string;
    numeroMiembros: string;
    nivelPoder: string;
    descripcion: string;
    imagen: string;
    defaultImagen = 'https://i.ibb.co/WWW7q4K/Captura.png'
    lider: Personaje;
    miembros: PersonajeTable;
    constructor(json) {
        super(json);
        super.clase = 'Organizacion';
        
        this.status = json.status;
        this.numeroMiembros = json.numero_miembros;
        this.nivelPoder = json.nivel_poder;
        this.descripcion = json.descripcion;
        this.imagen = json.imagen;
        if (json.miembros.length > 0) {
            this.miembros = new PersonajeTable(json.miembros);
        }
    }
}