import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [`
    img{
      width:30px;
      height :20px;
    }
    `]
})
export class CountryTableComponent {

  @Input()
  countries: Country[] = []
}
