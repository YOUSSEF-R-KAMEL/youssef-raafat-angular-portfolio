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
    'certi_01.png',
    'certi_02.png',
    'certi_03.png',
    'certi_04.png',
    'certi_05.jpg',
    'certi_06.png',
    'certi_07.png',
    'certi_08.png',
  ];
}
