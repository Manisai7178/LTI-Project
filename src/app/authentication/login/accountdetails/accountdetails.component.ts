import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {


  signupForm: FormGroup;
  constructor() {

    this.signupForm= new FormGroup({
      'fname' :new FormControl('', Validators.required),
      'lname':new FormControl('', Validators.required),
      'fatherName':new FormControl('', Validators.required),
      'mobile':new FormControl('', Validators.required),
      'email':new FormControl('', Validators.required),
      'adharcard':new FormControl('', Validators.required),
      'pannumber':new FormControl('', Validators.required),
      'occupation':new FormControl('', Validators.required),
      'income':new FormControl('', Validators.required),
      'gender':new FormControl('', Validators.required),
      'address':new FormControl('', Validators.required),

    })

  }

  saveAccount(post){

  }
  ngOnInit() {
  }
reset(){
  this.signupForm.reset();
}

}
