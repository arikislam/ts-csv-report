import fs from "fs";
import {DataReader} from "./MatchReader";


export class CsvFileReader implements DataReader{


    constructor(public fileName: string) {
    }

    data: string [][] = [];

    read(): void {

        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });


    }

}