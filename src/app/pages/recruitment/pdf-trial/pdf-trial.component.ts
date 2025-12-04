import { Component } from '@angular/core';
import { PdfService } from '../../../services/pdf-service.service';

@Component({
  selector: 'app-pdf-trial',
  templateUrl: './pdf-trial.component.html',
  styleUrls: ['./pdf-trial.component.css']
})
export class PdfTrialComponent {

  constructor(private pdfService: PdfService) { }

  pdftrial1() {
    this.pdfService.bc1();
  };

  pdftrial2() {
    this.pdfService.bc2();
  };

  pdftrial3() {
    this.pdfService.bc3();
  };

  pdftrial4() {
    this.pdfService.bc4();
  };

  pdftrial5() {
    this.pdfService.bc5();
  };

  pdftrial6() {
    this.pdfService.bc6();
  };

  pdftrial7() {
    this.pdfService.bc7();
  };

  pdftrial8() {
    this.pdfService.bc8();
  };

  pdftrial9() {
    this.pdfService.bc9();
  };

  pdftrial10() {
    this.pdfService.bc10();
  };

  pdftrial11() {
    this.pdfService.bc11();
  };

  pdftrial12() {
    this.pdfService.bc12();
  };

  pdftrial13() {
    this.pdfService.bc13();
  };

  pdftrial14() {
    this.pdfService.bc14();
  };

  pdftrial15() {
    this.pdfService.bc15();
  };

  pdftrial16() {
    this.pdfService.bc16();
  };

  pdftrialS1() {
    this.pdfService.S1();
  };

  pdftrialT17() {
    this.pdfService.T17();
  };

  pdftrialBT1() {
    this.pdfService.BT1();
  };

  pdftrialBT2() {
    this.pdfService.BT2();
  };

  pdftrialBT3() {
    this.pdfService.BT3();
  };

  pdftrialT1() {
    this.pdfService.T1();
  };
  
  pdftrialUT() {
    this.pdfService.UT();
  };

  pdftrialBINA1() {
    this.pdfService.BINA1();
  };

  pdftrialBINA2() {
    this.pdfService.BINA2();
  };

  pdftrialBINA3() {
    this.pdfService.BINA3();
  };

  pdftrialBINA4() {
    this.pdfService.BINA4();
  };

  pdftrialBINA5() {
    this.pdfService.BINA5();
  };
}