import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Ecommerce Fast Store',
      img: 'ecommerce_fast_store.png',
      liveLink: 'https://e-commerce-fast-store.vercel.app/login',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/eCommerce-Fast-Store'
    },
    {
      title: 'Digital Bond',
      img: 'digital_bond.png',
      liveLink: 'https://digital-bond-task-phi.vercel.app/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/digital-bond-task'
    },
    {
      title: 'Project Management System',
      img: 'pms.png',
      liveLink: 'https://project-management-system-zeta.vercel.app/#/auth/login',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/project-management-system'
    },
    {
      title: 'Food App',
      img: 'food-app.png',
      liveLink: 'https://food-app-red-kappa-23.vercel.app/auth/login',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/food-app'
    },
    {
      title: 'Testy Food',
      img: 'testy_food.png',
      liveLink: 'https://tasty-pastries.vercel.app/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/Tasty-Pastries'
    },
    {
      title: 'eCommerce',
      img: 'ecommerce.png',
      liveLink: 'https://e-commerce-cart-angular.vercel.app/products',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/eCommerce-Cart-Angular'
    },
    {
      title: 'Admin eCommerce',
      img: 'admin_ecommerce.png',
      liveLink: 'https://youssef-r-kamel.github.io/eCommerce-Admin-Angular/products',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/eCommerce-Admin-Angular'
    },
    {
      title: 'Grand mothers',
      img: 'grand_mothers.png',
      liveLink: 'https://youssef-r-kamel.github.io/grand-mothers/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/grand-mothers'
    },
    {
      title: 'Pesto',
      img: 'pesto.png',
      liveLink: 'https://youssef-r-kamel.github.io/pesto/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/pesto'
    },
    {
      title: 'eflyer',
      img: 'eflyer.png',
      liveLink: 'https://youssef-r-kamel.github.io/eflyer/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/eflyer'
    },
    {
      title: 'Johoba Agency',
      img: 'johoba.png',
      liveLink: 'https://youssef-r-kamel.github.io/johoba-agency/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/johoba-agency'
    },
    {
      title: 'Kaspes',
      img: 'kaspes.png',
      liveLink: 'https://youssef-r-kamel.github.io/kaspes/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/kaspes'
    },
    {
      title: 'leon',
      img: 'leon.png',
      liveLink: 'https://youssef-r-kamel.github.io/leon/',
      sourceCode: 'https://github.com/YOUSSEF-R-KAMEL/leon'
    }
  ];
}
