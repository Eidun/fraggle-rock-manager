import { Tableable } from "./tableable";

export class EntidadTable implements Tableable {
    heads: string[];
    data: any[];
    path: string;

    constructor(json) {
        this.path = 'entidades';
        this.heads = ['Alias', 'Tipo'];
        this.data = [];
        json.forEach(entidad => {
            const entidadTable: any = { id: entidad.id };
            entidadTable.values = [entidad.alias, entidad.clase];
            this.data.push(entidadTable);
        });
    }


}