import { Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "about-me", component: AboutMeComponent},
  {path: "skills", component: SkillsComponent},
  {path: "services", component: ServicesComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "certificates", component: CertificatesComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", redirectTo: 'home', pathMatch: 'full'},

];
