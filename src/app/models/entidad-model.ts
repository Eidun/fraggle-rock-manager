import { Tableable } from "./tableable";

export class EntidadTable extends Tableable {
    heads: string[];
    data: any[];

    pathMap = {
        'Personaje': '/personajes',
        'Organización': '/organizaciones'
    }

    constructor(json) {
        super();
        this.heads = ['Alias', 'Tipo'];
        this.data = [];
        json.forEach(entidad => {
            let pathEntidad = this.pathMap[entidad.clase];
            if (!pathEntidad) {
                pathEntidad = '/entidades'
            }
            const entidadTable: any = { id: entidad.id, path: pathEntidad };
            entidadTable.values = [entidad.alias, entidad.clase];
            this.data.push(entidadTable);
        });
    }


}

export class Entidad {

    id;
    clase: string;
    alias: string;
    constructor(json) {
        this.id = json.id;
        this.alias = json.alias;
    }
}