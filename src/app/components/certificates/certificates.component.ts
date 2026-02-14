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
    'certi_02.jpg',
    'certi_03.png',
    'certi_04.jpg',
    'certi_05.jpg',
    'certi_06.png',
    'certi_07.png',
    'certi_08.png',
    'certi_09.png',
    'certi_10.png',
  ];
}
