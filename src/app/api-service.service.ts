import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coinByID, coins, X_RAPIDAPI_HOST_KEY, X_RAPIDAPI_HOST_VALUE, X_RAPIDAPI_KEY_KEY } from 'src/commons/apiMethods';
import { Coin } from 'src/models/coin';
import { GetCoinResponse } from 'src/models/get.coin.response';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl = 'https://coinranking1.p.rapidapi.com/';

  private headers = new HttpHeaders().set(X_RAPIDAPI_HOST_KEY, X_RAPIDAPI_HOST_VALUE)
  .set(X_RAPIDAPI_KEY_KEY,'289e74c88bmshaa034e29712147cp1365e6jsn75362e4fda68');

  constructor(private http: HttpClient) { 

  }

  getCoin(id: number): Observable<GetCoinResponse> {

    const url_method = `${this.baseUrl}/${coinByID}/${id}`;

    const response =  this.http.get<GetCoinResponse>(url_method,{headers:this.headers}).pipe();

    return response;
  }
  
  getCoins(): Observable<Object> {

    const url_method = `${this.baseUrl}/${coins}`

    return this.http.get(url_method, {headers: this.headers}).pipe()
  }
}
