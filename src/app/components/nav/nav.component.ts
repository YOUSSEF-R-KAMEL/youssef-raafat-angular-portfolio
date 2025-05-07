import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isMenuOpen = false;
  linksList = [
    { link: "home", text: "Home" },
    { link: "about-me", text: "About Me" },
    { link: "skills", text: "Skills" },
    { link: "services", text: "Services" },
    { link: "projects", text: "Projects" },
    { link: "certificates", text: "Certificates" },
    { link: "contact", text: "Contact" }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
