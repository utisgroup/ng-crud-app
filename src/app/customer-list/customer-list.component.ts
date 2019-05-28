import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers = [
    'customer1',
    'customer2',
    'customer3',
    'customer4',
    'customer5',
    'customer6',
  ];

  constructor() { }

  ngOnInit() {
  }

}
