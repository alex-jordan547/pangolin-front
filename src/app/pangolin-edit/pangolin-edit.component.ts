import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PangolinService} from "../pangolin.service";


@Component({
  selector: 'app-pangolin-edit',
  templateUrl: './pangolin-edit.component.html',
  styleUrls: ['./pangolin-edit.component.css']
})
export class PangolinEditComponent implements OnInit {

  submitted = false;
  roles = ['Guerrier','Alchimiste','Sorcier','Espions','Enchanteur']

  constructor(private  formBuilder:FormBuilder,private router: Router,private service:PangolinService) { }

  form:FormGroup  = new FormGroup({
    role: new FormControl('')
  })

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        role: [
          this.service.pangolin.role,
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
      method:'PUT',
      body: new Blob([JSON.stringify(this.form.value)],{type:'application/json'})
    }

    fetch('http://localhost:5000/update/'+this.service.id, init)
      .then(response => {
        response.json()
          .then( data => {
            this.router.navigate(['/pangolin'])
          })
      })

  }

  onReset(): void{
    this.submitted = false;
    this.router.navigate(['/pangolin'])
    this.form.reset();
  }

}
