import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {


  public countries: Country[] = []
  public initialVlue: string = ''

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialVlue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
