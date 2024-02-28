// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { ProviderService } from './provider.service';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { NavComponent } from './nav/nav.component';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,RouterModule,CommonModule,ReactiveFormsModule,FormsModule,CommonModule,NavComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent  implements OnInit{
//   constructor(private Userservice:ProviderService){}

//   title = 'trainproject'
//   id  = null
//   userId=null
//   tittle = null
//   body=null
//   showform = false;
//   shown=false;
//   users:any= [];

//   openform1(){
//     this.showform=true;
//              }
//     openform(dataforedit:any){
//         this.shown= true;
//         this.showform = true;
//         if(dataforedit){
//     this.id = dataforedit.id;
//     this.userId =dataforedit.userId;
//     this.tittle=dataforedit.title;
//     this.body=dataforedit.body;
//     console.log(dataforedit);
    
    
//         }
//   }

//   closeform(){
//         this.showform = false;
//         this.clearform();
//              }

//        clearform(){
//     this.id = null;
//     this.body=null;
//     this.tittle=null;
//     this.userId=null
//        }

  
 


  
//     ngOnInit(): void {
//      this.getallusers()
//     }
       

// getallusers(){
//   this.p.getdata().subscribe((data)=>{
//     //  console.log(data);
//     this.users = data;
//     console.log(data);
    
     
//           })
// }


//     onsubmit(detail:any){
// this.p.postdata(detail).subscribe((d)=>{
//   console.log('-------------',d);
//   this.users.push(d)
//   this.showform=false;
  
// })
//     }
    
//     remove(id:number, i:number){
//         this.p.deletedata(id).subscribe((data2)=>{
//           this.users.splice(i, 1);
//         })
//       }

//     editdata(editabbledata:any,id:any){
//       this.p.edit(editabbledata,id).subscribe((e)=>{
      
//     alert("data updated successfully")
    
       
        

//       })

//     }
    
 
    
// }


// <!-- 

// <div class="container"  >
//     <div class="row">
//       <div class="col" *ngFor="let post of users; let i = index">
//         <div class="card">
//           <div class="card-header">
//             <h5 class="card-title"><span>User_</span>{{ post.id }}</h5>
//           </div>
//           <div class="card-body">
//             <p class="card-text"><span>UserId:</span>{{ " "+ post.userId }}</p>
//             <p class="card-text"><span>Tittle:</span> {{ post.title }}</p>
//             <p class="card-text"><span>Body:</span> {{ post['body'] }}</p>
//             <button  (click)="openform(post)"  >Edit User</button>     <button (click)= "remove(post['id'],i)">Remove User </button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   </div>
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Beautiful Form</title>
    
//   </head>
//   <body>
  
//   <div class="form-container" style="position: fixed;" *ngIf="showform">

//     <h2>Add user</h2>
//     <form #usersform= "ngForm"  (ngSubmit)="onsubmit(usersform.value)">
//       <div class="form-group">
//         <label for="id">ID:</label>
//         <input type="number" id="id"    [(ngModel)] ="id" name="id" ngModel="" required>

//       </div>
//       <div class="form-group">
//         <label for="userId">User ID:</label>
//         <input type="number" id="userId"  [(ngModel)] ="userId" name="userId" ngModel required>
//       </div>
//       <div class="form-group">
//         <label for="title">Title:</label>
//         <input type="text" id="title" [(ngModel)] ="tittle"  name="title" ngModel required>
//       </div>
//       <div class="form-group">
//         <label for="body">Body:</label>
//         <textarea id="body" name= "body"  [(ngModel)] ="body" required>
       
        
//         </textarea>

//       </div>
//       <button id="o" type="submit"   [disabled]="usersform.invalid">Save</button> <button id="ok" type="button" (click)="editdata(usersform.value,id)" id="b3"  *ngIf="shown">Save Edits</button>
//       <button id="ok" type="submit" (click)="closeform()">Cancle</button>
//       <p ></p>
//       <p class="displaynone" [class.is-valid]= "usersform.invalid && usersform.touched" [class.displaynone] ="usersform.pristine&& usersform.untouched" > Fill All The Field </p>
     
//     </form>
//   </div>
  
//   </body>
//   </html>
//   <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Navigation Bar</title>

// </head>
// <body>

// <nav class="navbar">
 
//    Left side: CRUD operations 
//   <div class="crud">
//  <p style="font-size: 18px; color: black; font-family: gilroy-bold; font-weight: 900;">Crud Operation</p>
//   </div>
  
 
//    Right side: Add User button 
//   <button class="add-user" (click)="openform1()" >Add User</button>
// </nav>

// </body>
// </html>
//  -->
this.users[id-1]=e;