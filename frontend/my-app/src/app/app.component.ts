import { Component } from '@angular/core';
import { MainComponent } from './core/layout/main/main.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MainComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {}
