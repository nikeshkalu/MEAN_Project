import { Component, OnInit } from '@angular/core';
import {User} from '../user.model'
import {UsersServices} from '../user.service'
import { ActivatedRoute} from '@angular/router';
import { NgForm, FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  form: FormGroup
  user:User


  constructor(public userService: UsersServices,public route:ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      email : new FormControl(null,{
          validators: [Validators.required]
      }
      ),
      password : new FormControl(null,{
          validators : [Validators.required]
      })
  })
  }

  
  onSavePost(){
      console.log('saved')
      
      if(this.form.invalid){
        return
    }
    
    this.userService.userSignUp(this.form.value)
  }

}
