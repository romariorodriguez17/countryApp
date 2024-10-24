import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: `

  img{
    width: 150px;
  }
  h2 {
    font-size:1.5rem;
  }
  `
})
export class CountryPageComponent implements OnInit {
  public country?: Country;


  constructor(
    private countriesService: CountriesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;




      });
  }
}
