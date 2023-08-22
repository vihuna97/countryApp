import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of, delay} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchCountryService {
    private _apiUrl: string = 'https://restcountries.com/v3.1/';
    public stateFlag: boolean = false;
    constructor(private http: HttpClient) { }
    
    private getCountriesRequest(url: string): Observable<Country[]>{
        return this.http.get<Country[]>(url).pipe(
            catchError(error => {this.stateFlag = true; console.log(this.stateFlag); return of<Country[]>([])}), delay(2000)
            );
    }

    searchByCapital(query: string ): Observable<Country[]>{
        const url: string = `${this._apiUrl}capital/${query}`
        return this.getCountriesRequest(url);
    }

    searchByCountry(query: string ): Observable<Country[]>{
        const url: string = `${this._apiUrl}translation/${query}`
        return this.getCountriesRequest(url);
    }

    searchByRegion(query: string ): Observable<Country[]>{
        const url: string = `${this._apiUrl}region/${query}`
        return this.getCountriesRequest(url);
    }

    countryPage(id: string): Observable<Country | null>{
        const url: string = `${this._apiUrl}alpha/${id}`
        return this.http.get<Country[]>(url).pipe(map(countries => {return (countries.length >= 1)?  countries[0]:  null}), catchError(error => {console.log(error); return of(null)}));
    }

}