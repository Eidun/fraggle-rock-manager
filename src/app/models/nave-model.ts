import { Tableable } from "./tableable";

export class NaveTable extends Tableable {
    heads: string[];
    data: any[];

    constructor(json) {
        super();
        this.heads = ['Nombre', 'Modelo', 'Clase', 'Comandante'];
        this.data = [];
        json.forEach(lugar => {
            const lugarTable: any = { id: lugar.id, path: '/naves' };
            lugarTable.values = [lugar.nombre, lugar.modelo, lugar.clase, lugar.alias_comandante ? lugar.alias_comandante : 'Desconocido'];
            this.data.push(lugarTable);
        });
    }


}