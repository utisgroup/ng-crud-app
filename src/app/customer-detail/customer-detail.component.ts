import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
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

  customerDetails = [
    {
      name:'rajesh',
      email:'rajesh.meena@gmail.com',
      contact:7304854819
    },
    {
      name:'rohit',
      email:'rohit.vyas@gmail.com',
      contact:8405768734
     },
    {
      name:'ankur',
      email:'ankur.vyas@gmail.com',
      contact:9084271698
     },
     {
      name:'mohit',
      email:'mohit.lalwani@gmail.com',
      contact:9545342790
     },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private fieldArray: Array<any> = [
    {
      index:1,
      name:'rajesh',
      email:'rajesh.meena@gmail.com',
      contact:7304854819
    },
    {
      index:2,
      name:'ankur',
      email:'vyas.ankur@gmail.com',
      contact:8304854819
    },
    {
      index:3,
      name:'rohit',
      email:'rohit.vyas@gmail.com',
      contact:9504854819
    }
  ];
private newAttribute: any = {};

addFieldValue() {
   this.fieldArray.push(this.newAttribute)
   this.newAttribute = {};
}

deleteFieldValue(index) {
   this.fieldArray.splice(index, 1);
}

editFieldValue(field) {
console.log(field);

}

  save() {
    console.log("save method called");
  }

  edit(customer){
    console.log(customer);
    this.router.navigate(['/edit'], customer);

  }

  delete() {
    console.log("delete");
  }
}
