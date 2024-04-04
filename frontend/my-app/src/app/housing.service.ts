import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housing-location';
import { FormDetail } from './form-detail';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  route: ActivatedRoute = inject(ActivatedRoute);
  private readonly url = 'http://localhost:3000/locations';
  private http = inject(HttpClient);

  housing$: Observable<HousingLocation[]> = this.http.get<HousingLocation[]>(
    this.url
  );

  getHousingLocationById(id: number): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }

  deleteLocation(id: string): void {
    console.log(id);
    this.http.delete(`${this.url}/${id}`).subscribe(() => {
      this.housing$ = this.http.get<HousingLocation[]>(this.url);
    });
  }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  submitApplication(params: FormDetail): void {
    console.log(params);
  }
}
