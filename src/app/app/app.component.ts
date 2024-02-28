import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from './users.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { IUser } from './Iuser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,ReactiveFormsModule,FormsModule,CommonModule,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  Formheading = 'Add User';
  display="display: none;"
  showform = false;
  shown=false;
  showcard = true;
  showbutton = true;
  showpopup = false;
  users:IUser[]=[];
  newCtrl!: FormControl;
  
  userform!:FormGroup;
  constructor(private UserService:UserService,
    private http:HttpClient, 
    private fb: FormBuilder){
      this.newCtrl = new FormControl()
    }

  ngOnInit(): void {
    this.userform = new FormGroup({
      id:new FormControl('',Validators.required),
      userId:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required)
      
    })
  this.getallusers()
    
  }
                  // open form for user to input the data

  openformforaddinguser():void{
  this.showform=true;
  this.showcard = false;
  this.showbutton = true;
  this.display="display: none;"
  this.showpopup = false
  }
                //  getallusers is called for fetching data from jsom placeholder

  getallusers():void{
    this.UserService.getdata().subscribe((data)=>{
    this.users = data;
    console.log(data);
    })
   }
                //  onsubmit (when data given by user)  is called for adding data on json jsom placeholder

  onsubmit():void {
    const FormValue = this.userform.value;
    this.UserService.postdata(FormValue).subscribe((d)=>{
    this.users.push(d)
    this.showform=false; 
    this.showcard=true;
    this.notification()
    this.clearform()
    })
   }
  
  openform(dataforedit:IUser):void{
    console.log(dataforedit);  
    alert("would like to change")
    this.shown= true;
    this.showform = true;
    this.showcard = false;
    this.showbutton=false;
    this.display="display: inline;"
    this.showpopup = false;
    this.Formheading="Edit user"
    // this.showeditbutton =true;

    if(dataforedit){ 
     this.userform.patchValue(dataforedit)
    }
  }  
                  // close form for clossing form when data is added
  closeform():void{
  this.showform = false;
  this.showcard = true;
  this.clearform();
  this.Formheading="Add User"
  }
                    // clear form when update is done for clossing form when data is added

  clearform():void{
    this.userform.controls['id'].setValue(null)
    this.userform.controls['userId'].setValue(null)
    this.userform.controls['title'].setValue(null)
    this.userform.controls['body'].setValue(null)
  }
                        // edit funtion for editting the existing user

  editdata(updvalue:IUser,id:number):void{
   this.showbutton = false;
   this.showform =false;
   this.showcard = true;
   this.clearform();
    this.UserService.edit(updvalue,id).subscribe((e)=>{      
    alert("data updated successfully")
    console.log(e)
    this.users[id-1]=e;
    this.Formheading="Add User"
    })
  } 

                      // remove funtion for removing data 
  remove(id:number, i:number):void{
    this.UserService.deletedata(id).subscribe((data2)=>{
    this.users.splice(i, 1);
    })
  }
                      // notification  funtion for showing notification user successfully added 
  notification():void{
    this.showpopup =true;
    setTimeout(()=>{
    this.showpopup = false;
    },200)
  }
}
 
