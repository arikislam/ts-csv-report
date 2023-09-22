import {OutputTarget} from "../Summary";
import fs from 'fs';
import path from "path";
export class HTMLReport implements OutputTarget {
    private filePath = path.resolve(__dirname, '../../public/report.html');

    print(report: string): void {
        console.log(this.filePath);
        let html = ` <div>
                                <h1> Analysis Output :</h1>
                                <h4>${report}</h4> 
                           </div>  `;



        fs.writeFileSync(this.filePath, html);
    }

}