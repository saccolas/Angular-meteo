import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meteo } from '../interfaces/meteo';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-display-meteo',
  templateUrl: 'display-meteo.component.html',
  providers: [ MeteoService],
  styles: [
  ]
})
export class DisplayMeteoComponent  {
 

  //meteo: Meteo;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private meteoService: MeteoService

    ) { }

 /*ngOnInit(): void  {
     this.meteoService.subscribe((res: Meteo) => {
      this.meteo = res
     })
     
 }*/

}
