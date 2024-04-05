import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HousingService } from '../../../core/services/housing.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDetail } from '../../../form-detail';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../../shared/components/housing-location/housing-location';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <article>
      @if (housingByIdDetails$ | async; as housingLocation) {
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        [alt]="housingLocation?.name"
      />
      <section class="listing-description">
        <h2 class="listing-heading">
          {{ housingLocation?.name }}
        </h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      }
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          @if (firstNameCTRL.getError('minlength'); as minLengthError ) {
          <p class="error">
            {{ minLengthError.actualLength }} /
            {{ minLengthError.requiredLength }}
          </p>
          }
          <label for="first-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email" />
          @if (applyForm.controls['email'].getError('email')) {
          <p class="error">Please enter a valid email address</p>
          }
          <button type="submit" class="primary" [disabled]="applyForm.invalid">
            Apply now
          </button>
          <pre>
            {{ applyForm.controls['firstName'].errors | json }}

          </pre
          >
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);

  housingByIdDetails$: Observable<HousingLocation> = this.route.params.pipe(
    map((params: Params) => Number(params['id'])),
    switchMap((id: number) => this.housingService.getHousingLocationById(id))
  );

  applyForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ],
      nonNullable: true,
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
  });

  submitApplication() {
    this.housingService.submitApplication(this.applyForm.value as FormDetail);
  }

  get firstNameCTRL() {
    return this.applyForm.get('firstName') as FormControl;
  }
}
