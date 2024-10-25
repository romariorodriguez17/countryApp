import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';
import { CacheStore } from '../../interface/cache-store.interface';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoading: boolean = false;
  public initialVlue: string = ''

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialVlue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      })
  }
}
