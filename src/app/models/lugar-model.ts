import { Tableable } from "./tableable";

export class LugarTable extends Tableable {
    heads: string[];
    data: any[];

    constructor(json) {
        super();
        this.heads = ['Nombre', 'Clase', 'Sector', 'Sistema'];
        this.data = [];
        json.forEach(lugar => {
            const lugarTable: any = { id: lugar.id, path: '/lugares' };
            lugarTable.values = [lugar.nombre, lugar.clase, lugar.sector, lugar.sistema];
            this.data.push(lugarTable);
        });
    }


}