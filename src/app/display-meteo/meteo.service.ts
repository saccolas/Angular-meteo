import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Meteo } from '../interfaces/meteo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeteoService implements OnInit   {
 

  constructor(
    private http: HttpClient)
     { }


     ngOnInit(): void {
       this.http.get<any>(environment.apiBaseUrl +'meteo').subscribe((data : any) => {
        console.log("data", data)

      })
    }

     

}
