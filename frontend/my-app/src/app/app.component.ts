import { Component } from '@angular/core';
import { HomeComponent } from './views/public/home/home.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
})
export class AppComponent {}
