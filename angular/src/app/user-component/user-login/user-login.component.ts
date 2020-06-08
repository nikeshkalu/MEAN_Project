import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {User} from '../user.model'
import {UsersServices} from '../user.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User
  form : FormGroup 
  
 
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
          if(this.form.invalid){
          return
      }
      
      this.userService.userLogin(this.form.value)

  }
  

 

  // onSavePost(){
  //     if(this.form.invalid){
  //         return
  //     }
     
  //     if(this.mode == 'create')
  //     {
  //     this.postService.addPost(this.form.value.title,this.form.value.content,this.form.value.image)
      
  //     }
  //     else{
  //     this.postService.updatePost(this.postId,this.form.value.title,this.form.value.content,this.form.value.image)


  //     }
  //     // const post : Post = {
  //     //     title : form.value.enteredTitle,
  //     //     content : form.value.enteredContent
  //     // }
  //     this.form.reset()   
      
  // }
 
}
  

