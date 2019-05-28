import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customers = [
    'customer1',
    'customer2',
    'customer3',
    'customer4',
    'customer5',
    'customer6',
  ];

  operationName = [
    'view',
    'add',
    'edit',
    'delete'
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
