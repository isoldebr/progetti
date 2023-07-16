import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // search
  // lookup
  // list
  // filter
  constructor(private httpClient: HttpClient) {}
  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter
    );
  }

  getCocktailById(id: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    );
  }

  getCocktailByName(name: string) {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name
    );
  }
}
