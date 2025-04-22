import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      img: 'ser_01.png',
      title: 'Technical Support',
      description: 'Support is available anytime. If you want changes or improvements in your Angular-based website or web app, you can always reach out. I ensure smooth updates and maintenance.'
    },
    {
      img: 'ser_02.png',
      title: 'Website Design',
      description: 'Modern & Responsive Angular Websites, I build sleek, responsive, and user-centric websites using Angular. My focus is on usability, accessibility, and high performance across all devices.'
    },
    {
      img: 'ser_03.png',
      title: 'Application Design',
      description: 'Intuitive Angular Applications, I design and develop intuitive interfaces for web applications using Angular, ensuring a smooth and seamless experience with clean UI and well-structured components.'
    }
  ];
}
