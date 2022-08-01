import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meteo } from '../interfaces/meteo';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-display-meteo',
  templateUrl: 'display-meteo.component.html',
  providers: [ MeteoService],
  styles: [
  ]
})
export class DisplayMeteoComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;

  public meteo?: Meteo;

  constructor(private meteoService: MeteoService) { }

 ngOnInit(): void  {
    this.subscription = this.meteoService.getMeteo().subscribe((res: Meteo) => {
      this.meteo = res
    });    
 }

 ngOnDestroy(): void {
  this.subscription?.unsubscribe();
 }

}
