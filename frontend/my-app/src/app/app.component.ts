import { Component } from '@angular/core';
import { HomeComponent } from './views/public/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomeComponent],
})
export class AppComponent {
  navigateToHome() {
    window.location.href = '/';
  }
}
