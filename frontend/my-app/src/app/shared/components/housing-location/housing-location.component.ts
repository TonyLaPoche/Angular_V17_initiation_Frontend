import { Component, input, output } from '@angular/core';
import { HousingLocation } from './housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
      />
      <h2 class="listing-heading">
        {{ housingLocation().name }}
      </h2>
      <p class="listing-location">
        {{ housingLocation().city }},
        {{ housingLocation().state }}
      </p>
      <div class="footerCard">
        <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
        <button
          type="button"
          class="primary"
          (click)="onDelete.emit(housingLocation().id)"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocation>();

  onDelete = output<string>();
}
