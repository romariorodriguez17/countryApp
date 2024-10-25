import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';
import { Region } from '../../interface/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public initialValue: string = ''

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
