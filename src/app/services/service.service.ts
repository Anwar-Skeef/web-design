import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse, Sign } from './../interfaces/meal';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'https://staging.restaurant-platform.com/meal/get';
  constructor(private http: HttpClient) {}
  GetMeal(): Observable<GeneralResponse> {
    return this.http.get<GeneralResponse>(this.url, {
      params: { meal_category_id: '1' },
      headers: { Accept: 'application/json' },
    });
  }
  SaveData(data: Sign): Observable<Sign> {
    return this.http.post<Sign>('https://jsonplaceholder.typicode.com/posts', {
      data,
    });
  }
}
