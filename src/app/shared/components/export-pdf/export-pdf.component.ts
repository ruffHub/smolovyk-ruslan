import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {ExportPdfService} from '@app/core/_services';

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.css']
})
export class ExportPdfComponent implements OnInit {
  @Input() visible: true;
  @ViewChild('renderAsPdfComponent') renderAsPdfComponent: ElementRef;

  constructor(private exportPdf: ExportPdfService) {
  }

  ngOnInit() {
    const el = this.renderAsPdfComponent.nativeElement.innerHTML;
    setTimeout(this.exportPdf.print(el, 'Smolovyk Ruslan CV'), 3000);
  }

}
