 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{
    constructor(private activatedRoute: ActivatedRoute, 
                private countryService: SearchCountryService,
                private router: Router){}
                
                public country?: Country;
                
                ngOnInit(): void {
                  this.activatedRoute.params.pipe(
                    switchMap(({id}) => this.countryService.countryPage(id)))
                    .subscribe(countrie =>  {if(!countrie) return this.router.navigateByUrl('countries/by-capital'); this.country = countrie; console.log(countrie); return}); 
                }
;

    
    
}
