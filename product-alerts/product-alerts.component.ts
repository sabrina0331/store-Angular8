import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//below handles functionality for the component
export class ProductAlertsComponent implements OnInit {
  //input is the decorator, indicates to pass the info from components' parents' which is product-list
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
