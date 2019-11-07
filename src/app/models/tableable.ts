export class Tableable {
    heads: string[];
    data: any[];

    filter: string;

    getData() {
        let finalData = this.data;
        if (this.filter) {
            finalData = finalData.filter(d =>
                d.values.some(value => {
                    return value ? value.toLowerCase().includes(this.filter.toLowerCase()) : false;
                })
            );
        }
        finalData = finalData.sort((d1, d2) => {
            if (d1.values[0] < d2.values[0]) {
                return -1;
            }
            if (d1.values[0] > d2.values[0]) {
                return 1;
            }
            return 0;
        });
        return finalData;
    }
}