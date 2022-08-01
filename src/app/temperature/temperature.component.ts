import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl:  'temperature.component.html',
  styles: [
  ]
})
export class TemperatureComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

}
