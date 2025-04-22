import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CertificatesComponent {
  certificates = [
    'images/certificate/certi_01.png',
    'images/certificate/certi_02.png',
    'images/certificate/certi_03.png',
    'images/certificate/certi_04.png',
    'images/certificate/certi_05.jpg',
    'images/certificate/certi_06.png',
    'images/certificate/certi_07.png',
    'images/certificate/certi_08.png',
  ];
}
