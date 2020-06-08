// import { User } from './user.model';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable({providedIn:"root"})
export class UsersServices{
    // private users : User[] = [];
    // private postUpdated = new Subject<User[]>()
    token: any;
    
    constructor(private http:HttpClient,private router : Router){
            
    }

    userLogin(formData){     
        // const headers = new HttpHeaders({'Authorization': this.token, 'Content-Type': 'application/json'});
       this.http.post<{message:string,token: string}>('http://localhost:3000/user/login',formData)
        .subscribe((responseData)=>{
            console.log('Login Succesful')
            localStorage.setItem('token',responseData.token)
            // console.log(responseData.token)
            this.router.navigate(["home"])
        })

    }

    userSignUp(formData){
        console.log(formData)
        this.http.post<{message:string}>('http://localhost:3000/user/signup',formData)
        .subscribe((responseData)=>{
            console.log('New User Created')
            this.router.navigate(["user/login"])
     
        })
    }
    // getUserInfo(){
    //     this.http.get<{message:'string', : any}>('http://localhost:3000/user/login')
    //     .pipe(map((postData)=>{
    //         return postData.posts.map((post)=>{
    //             return { 
    //                 title : post.title,
    //                 content : post.content,
    //                 id: post._id,
    //                 imagePath : post.imagePath
    //             }
    //         })
    //     }))
    //     .subscribe((finalpostData)=>{
    //         this.posts = finalpostData
    //         this.postUpdated.next([...this.posts])
    //     })
    //    // return [...this.posts]
    // }

    // getPostUpdateListener(){
    //     return this.postUpdated.asObservable();
    // }

    // getPost(id:string){
    //     return this.http.get<{id:string,title:string,content:string,imagePath:string}>('http://localhost:3000/api/posts/'+id)
    // }

    // addPost(title : string , content : string,image : File){
    //     //const post : Post = {id:null,title:title,content:content}
    //     const postData = new FormData()
    //     postData.append("title",title)
    //     postData.append("content",content)
    //     postData.append("image",image, title)

    //     this.http.post<{message:string,post: Post}>('http://localhost:3000/api/posts',postData)
    //     .subscribe((responseData)=>{
    //         const post : Post = {
    //             id : responseData.post.id,
    //             title:title,
    //             content:content,
    //             imagePath:responseData.post.imagePath
    //         }
    //         // const Id = responseData.postId
    //         // post.id = Id 
    //         this.posts.push(post)
    //         this.postUpdated.next([...this.posts]);
    //         this.router.navigate(["/"])
    //     })
    // }

    // updatePost(id:string,title:string,content:string,image:File | string){
    //     let postData : Post | FormData
    //     if(typeof(image) === 'object'){
    //         postData = new FormData()
    //         postData.append("id",id)
    //         postData.append("title",title)
    //         postData.append("content",content)
    //         postData.append("image",image,title)

    //     }
    //     else{
    //         postData = {
    //             id:id,
    //             title:title,
    //             content:content,
    //             imagePath : image
    //         }
    //     }
    // //  const post :Post = { id:id,title:title,content:content,imagePath:null}
    //     this.http.put('http://localhost:3000/api/posts/' + id,postData)
    //     .subscribe((response)=>{ 
    //         const upadatedPost = [...this.posts]
    //         const oldPostIndex = upadatedPost.findIndex(p=>p.id === id)
    //         const post : Post = {
    //             id:id,
    //             title:title,
    //             content:content,
    //             imagePath : ''
    //         }
    //         upadatedPost[oldPostIndex] = post
    //         this.posts = upadatedPost
    //         this.postUpdated.next([...this.posts]);
    //         this.router.navigate(["/"])
    //     })
    // }

    // deletePost(postId : string){
    //     this.http.delete('http://localhost:3000/api/posts/'+ postId)
    //     .subscribe(()=>{
    //         console.log('Deleted')
    //         const updatedPosts = this.posts.filter(post=>post.id!== postId)
    //         this.posts = updatedPosts
    //         this.postUpdated.next([...this.posts]);

    //     })
    // }
}