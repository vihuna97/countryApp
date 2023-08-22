import { Country } from '../../interfaces/country.interface';
import { SearchCountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
    constructor(private countryService: SearchCountryService ){

    }
  searchByCountry(word: string ):void{
      this.countryService.searchByCountry(word).subscribe(countries => {this.countries = countries; setTimeout(()=>{console.log(this.countries)}, 2000)})
  }
}
