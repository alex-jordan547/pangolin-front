import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup  = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  })
  submitted = false;
  roles = ['Guerrier','Alchimiste','Sorcier','Espions','Enchanteur']
  constructor(private  formBuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',

          Validators.required
        ],
        password: [
          '',

          Validators.required

        ],
        role: [
          '',
          Validators.required
        ],
      }
    )
  }

  get f(): { [key:string] : AbstractControl}{
    return this.form.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }

    let init = {
      method:'POST',
      body: new Blob([JSON.stringify(this.form.value)],{type:'application/json'})
    }

    fetch('http://localhost:5000/register',init)
      .then(response => {
        response.json()
          .then( data => {

              this.router.navigate(['/login'])
          })
      })

  }

  onReset(): void{
    this.submitted = false;
    this.router.navigate(['/login'])
    this.form.reset();
  }

}
