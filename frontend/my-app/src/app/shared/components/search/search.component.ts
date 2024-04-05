import { Component, Output, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchControl = new FormControl('', { nonNullable: true });
  form = new FormGroup({ searchControl: this.searchControl });

  placeholder = input.required();

  @Output() searchTerm = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(1000),
    distinctUntilChanged()
  );
  onSearch = output<string>();
}
