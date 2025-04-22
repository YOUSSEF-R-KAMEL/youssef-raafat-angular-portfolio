import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML5', imageUrl: 'html.png' },
    { name: 'CSS3', imageUrl: 'css.png' },
    { name: 'Sass', imageUrl: 'sass.png' },
    { name: 'Tailwind', imageUrl: 'tailwind.png' },
    { name: 'JavaScript', imageUrl: 'js.png' },
    { name: 'TypeScript', imageUrl: 'typescript.png' },
    { name: 'Angular +19', imageUrl: 'angular.png' },
    { name: 'Angular Material', imageUrl: 'angular-material.png' },
    { name: 'PrimeNg', imageUrl: 'primeng.png' },
    { name: 'Primeflex', imageUrl: 'primeflex.jpg' },
    { name: 'Git', imageUrl: 'git.png' },
    { name: 'Github', imageUrl: 'github.png' }
  ];
}
