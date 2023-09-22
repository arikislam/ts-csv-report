import {CsvFileReader} from "./composition/CsvFileReader";
import {MatchReader} from "./composition/MatchReader";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import path from 'path';
import {ConsoleReport} from "./reports/ConsoleReport";
import {Summary} from "./Summary";
import {HTMLReport} from "./reports/HTMLReport";

const teamName = 'Liverpool';
const teamName2 = 'Newcastle';
const filePath = path.resolve(__dirname, '../data/football.csv');

const reader = new MatchReader(new CsvFileReader(filePath));
reader.load();

//Report will output as Html in 'public' directory
new Summary(new WinsAnalysis(teamName),  new HTMLReport()).buildAndPrintReport(reader.matches);

new Summary(new WinsAnalysis(teamName2),  new ConsoleReport()).buildAndPrintReport(reader.matches);