import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../../../shared/components/housing-location/housing-location.component';
import { HousingService } from '../../../core/services/housing.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from '../../../shared/components/search/search.component';
import { BehaviorSubject, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <app-search
        (onSearch)="term$.next($event)"
        (searchTerm)="term$.next($event)"
        placeholder="Search for a city..."
      ></app-search>
    </section>
    <section class="results">
      @for (houseLocation of filteredHousing$ | async ; track houseLocation.id)
      {
      <app-housing-location
        [housingLocation]="houseLocation"
        (onDelete)="housingService.deleteLocation($event)"
      >
      </app-housing-location>
      } @empty {
      <p>No results found.</p>
      }
    </section>
  `,
  styleUrl: './home.component.css',
  imports: [
    HousingLocationComponent,
    CommonModule,
    ReactiveFormsModule,
    SearchComponent,
  ],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  term$ = new BehaviorSubject<string>('');

  filteredHousing$ = this.term$.pipe(
    switchMap((term) =>
      this.housingService.housing$.pipe(
        map((locations) =>
          locations.filter((location) =>
            location.city.toLowerCase().includes(term.toLowerCase())
          )
        )
      )
    )
  );
}
