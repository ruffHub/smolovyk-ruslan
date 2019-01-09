import {Injectable} from '@angular/core';
import jsPDF from 'jsPDF';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {
  constructor() {
  }

  print(el, fileName: string) {
    const doc = new jsPDF();
    doc.fromHTML(el, 15, 15, {});
    doc.save(fileName);
  }
}
