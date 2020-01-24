import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  loginForm: FormGroup;
  constructor(private router: Router) {
          this.loginForm = new FormGroup({
        'email': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),

       });

  }

  login(post){
 if(post.email == "kingkong" && post.password == "12345"){
  this.router.navigate(['/login/dashboard']);
 }else {
   console.log('invalid')
   alert('Invalid Details')
 }
  }

  ngOnInit() {
  }
ngOnDestroy(){

}
}
