import { Component } from '@angular/core';
import { MainComponent } from './core/layout/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MainComponent],
})
export class AppComponent {}
