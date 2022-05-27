import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PangolinService} from "../pangolin.service";
import {Store} from "@ngrx/store";
import {initAction, loggin} from "../state/actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup  = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  submitted =false;
  errorMessage = '';
  constructor(private  formBuilder:FormBuilder,private router: Router, private service:PangolinService, private  store:Store) { }

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
      }
    )

    this.store.dispatch(initAction())
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

    fetch('http://localhost:5000/login',init)
      .then(response => {
        response.json()
          .then( data => {
            if(data.statut == 200){
              this.service.id = data.data._id;
              this.service.amis = data.data.amis
              this.router.navigate(['/pangolin'])
            }else {
              this.errorMessage = 'Veuillez reéssayer avec des identifiants différents'
            }

          })
      })

  }

}
