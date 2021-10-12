import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUs = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required,Validators.email]),
    telNum: new FormControl("", Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

   
      if(this.contactUs.valid){

        var a = this.contactUs.value;
  
        console.log(a)
  
     }
   
    }

}
