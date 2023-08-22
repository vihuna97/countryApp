import { Component } from '@angular/core';
import { SearchCountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = []
      constructor(private countryService: SearchCountryService){
      }

      searchByRegion(word: string):void{
        this.countryService.searchByRegion(word).subscribe(countries => {this.countries = countries});
      }
}
