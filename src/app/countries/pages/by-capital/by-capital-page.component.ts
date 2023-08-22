import { Country } from './../../interfaces/country.interface';
import { SearchCountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  public stateFlag: boolean = false;
  public isLoading: boolean = false;

  constructor(private countryService: SearchCountryService){
  }

  
  searchByCapital(word: string):void{
    this.isLoading = true;
      this.countryService.searchByCapital(word).subscribe(countriesR => { this.stateFlag = this.countryService.stateFlag; this.isLoading = false ; this.countries = countriesR;});
    }
    
}
