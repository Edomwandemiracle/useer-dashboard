import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStat() {
    return this.http.get(
      'https://607040c685c3f0001746fbc1.mockapi.io/api/v2/dashboard'
    );
  }
}
