import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Subscriber } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm:FormGroup;
constructor(private builder:FormBuilder,private apiservice:DataService,private router:Router) { }

 ngOnInit() {
  this.buildForm()
}

 buildForm(){
  this.registrationForm=this.builder.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    username:['',Validators.required],
    mobileno:['',Validators.required],
    password:['',Validators.required],
    Confirmpassword:['',Validators.required]
  })
 }
registration(){
  console.log(this.registrationForm.value)
  this.apiservice.createUser(this.registrationForm.value).subscribe
  (data => {
    this.router.navigate(['/login']);
  })


}
 }