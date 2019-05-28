import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  ngOnInit() {
  }

  submitForm(form: NgForm){
    console.log(form);

  }
 reset() {
       this.form.reset();
   }

}
