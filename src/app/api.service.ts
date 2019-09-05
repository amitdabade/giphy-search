import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey: string = "UhrdtAkkvzt5H4aX5iTcaRAMybdTVX5I";
  limit: number = 20;
  apiURL: string;

  constructor(private httpClient: HttpClient) {}
  
  public getGiphy(q){
    this.apiURL = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${this.apiKey}&limit=${this.limit}`;
    return this.httpClient.get(this.apiURL);
  }

}