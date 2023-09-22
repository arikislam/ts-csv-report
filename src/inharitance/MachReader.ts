import {CsvFileReader} from "./CsvFileReader";
import {parseDateFromString} from "../utils";
import {MatchResult} from "../enums/MatchResult";

type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];

export class MachReader extends CsvFileReader<MatchData> {

    mapRow(row: string[]): MatchData {
        return [
            parseDateFromString(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    }
}