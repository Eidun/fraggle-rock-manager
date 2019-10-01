import { Tableable } from "./tableable";

export class OrganizacionTable implements Tableable {
    heads: string[];
    data: any[];
    path: string;

    constructor(json) {
        this.path = 'organizaciones';
        this.heads = ['Alias', 'Nivel de poder', 'Status', 'Número de miembros'];
        this.data = [];
        json.forEach(organizacion => {
            const organizacionTable: any = { id: organizacion.id };
            organizacionTable.values = [organizacion.alias, organizacion.nivel_poder, organizacion.status, organizacion.numero_miembros];
            this.data.push(organizacionTable);
        });
    }


}