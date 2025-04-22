import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', loadComponent: () => import('./components/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'skills', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'certificates', loadComponent: () => import('./components/certificates/certificates.component').then(m => m.CertificatesComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];
