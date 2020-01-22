import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  loginForm: FormGroup;
  constructor() {
          this.loginForm = new FormGroup({
        'uname' : new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),

       });

  }

  onSubmit(post){
console.log('post--->', post);
  }

  ngOnInit() {
  }
ngOnDestroy(){

}
}
