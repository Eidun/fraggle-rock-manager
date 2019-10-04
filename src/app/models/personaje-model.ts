import { Tableable } from "./tableable";
import { OrganizacionTable } from './organizacion-model';
import { Entidad } from './entidad-model';

export class PersonajeTable extends Tableable {
    heads: string[];
    data: any[];

    constructor(json) {
        super();
        this.heads = ['Alias', 'Rango', 'Raza', 'Nombre', 'Edad', 'Organizacion'];
        this.data = [];
        json.forEach(personaje => {
            const personajeTable: any = { id: personaje.id, path: '/personajes' };
            personajeTable.values = [personaje.alias, personaje.rango, personaje.raza, personaje.nombre + ' ' + personaje.apellidos, personaje.edad, personaje.alias_organizacion ? personaje.alias_organizacion : 'Ninguna'];
            this.data.push(personajeTable);
        });
    }


}

export class Personaje extends Entidad {

    nombre: string;
    apellidos: string;
    rango: string;
    edad: string;
    raza: string;
    descripcion: string;
    imagen: string;
    defaultImagen = 'https://png.pngtree.com/svg/20170527/user_unknown_1048445.png'
    organizacion: OrganizacionTable;
    constructor(json) {
        super(json);
        super.clase = 'Personaje';
        
        this.nombre = json.nombre;
        this.apellidos = json.apellidos;
        this.rango = json.rango;
        this.edad = json.edad;
        this.raza = json.raza;
        this.descripcion = json.descripcion;
        this.imagen = json.imagen;
        if (json.organizacion) {
            this.organizacion = new OrganizacionTable([json.organizacion]);
        }
    }
}