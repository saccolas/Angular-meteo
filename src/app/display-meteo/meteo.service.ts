import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Meteo } from '../interfaces/meteo';
import { Observable } from 'rxjs';

const URL = 'meteoApi/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  constructor(
    private http: HttpClient) {}

    getMeteo(): Observable<Meteo> {
      return this.http.get<Meteo>(URL);
    }
}
