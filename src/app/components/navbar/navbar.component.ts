import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { link: 'home', icon: 'images/icons/business_contact.png', label: 'Home' },
    { link: 'about-me', icon: 'images/icons/comvzhssmyverizon.png', label: 'About Me' },
    { link: 'skills', icon: 'images/icons/pie_chart.png', label: 'Skills' },
    { link: 'services', icon: 'images/icons/layers.png', label: 'Services' },
    { link: 'projects', icon: 'images/icons/safe.png', label: 'Projects' },
    { link: 'certificates', icon: 'images/icons/graduation_cap.png', label: 'Certificates' },
    { link: 'contact', icon: 'images/icons/thumb-up.png', label: 'Contact' },
  ];
}
