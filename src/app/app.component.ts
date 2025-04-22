import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  title = 'youssef-raafat-portfolio';
}
