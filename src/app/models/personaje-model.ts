import { Tableable } from "./tableable";

export class PersonajeTable implements Tableable {
    heads: string[];
    data: any[];
    path: string;

    constructor(json) {
        this.path = 'personajes';
        this.heads = ['Alias', 'Rango', 'Raza', 'Nombre', 'Edad', 'Organizacion'];
        this.data = [];
        json.forEach(personaje => {
            const personajeTable: any = { id: personaje.id };
            personajeTable.values = [personaje.alias, personaje.rango, personaje.raza, personaje.nombre + ' ' + personaje.apellidos, personaje.edad, personaje.alias_organizacion ? personaje.alias_organizacion : 'Ninguna'];
            this.data.push(personajeTable);
        });
    }


}