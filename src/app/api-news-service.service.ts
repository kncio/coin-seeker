import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { X_RAPIDAPI_HOST_KEY, X_RAPIDAPI_HOST_VALUE, X_RAPIDAPI_KEY_KEY } from 'src/commons/apiMethods';
import { Observable } from 'rxjs';
import { NewsResponse } from 'src/models/news';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsServiceService {

  baseUrl = "https://bing-news-search1.p.rapidapi.com/news/search";

  private headers = new HttpHeaders().set( 'x-rapidapi-host', 'bing-news-search1.p.rapidapi.com')
  .set(X_RAPIDAPI_KEY_KEY,'289e74c88bmshaa034e29712147cp1365e6jsn75362e4fda68');

  //FIxed for simplicity
  private queryParams = new HttpParams().set("q","Cryptocurrencies").set("safeSearch","Off")
    .set("textFormat","Raw").set("freshness","Day");

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsResponse>{
    return this.http.get<NewsResponse>(this.baseUrl,{headers:this.headers,params:this.queryParams}).pipe();
  }

}
