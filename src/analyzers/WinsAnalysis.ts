import {Analyzer} from "../Summary";
import {MatchData} from "../MatchData";
import {MatchResult} from "../enums/MatchResult";

export class WinsAnalysis implements Analyzer {

    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let noOfWins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                noOfWins++;
            }

            if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                noOfWins++;
            }
        }

        return `${this.teamName} won ${noOfWins} Games`;
    }

}