import {Component, OnInit} from '@angular/core';
import {PangolinService} from "../pangolin.service";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";

import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-pangolin',
  templateUrl: './list-pangolin.component.html',
  styleUrls: ['./list-pangolin.component.css']
})
export class ListPangolinComponent implements OnInit {

  ListPango: any
  amis: any;


  form:FormGroup  = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  })
  submitted = false;
  roles = ['Guerrier','Alchimiste','Sorcier','Espions','Enchanteur']


  pangolin: any

  constructor(private service: PangolinService, private router: Router,private  formBuilder:FormBuilder,) {

  }

  ngOnInit(): void {
    this.service.listeOther().then(data => {
      console.log(data)
      this.ListPango = data;
      console.table('Liste pangolin :', this.ListPango)
    });

    this.amis = this.service.pangolin.amis
    this.pangolin = this.service.pangolin
    console.table('pangolin :', this.pangolin.amis)

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
          this.ajouter(data.data.insertedId);
            this.router.navigate(['/pangolin'])
          })
      })

  }




  ajouter(id: any) {
    this.service.ajouterAmi(id).then(res => {
      this.service.show().then(() => {
        this.amis = this.service.pangolin.amis
      })

    })

  }

  supprimer(id: any) {
    this.service.supprimerAmi(id).then(res => {
      this.service.show().then(() => {
        this.amis = this.service.pangolin.amis
      })
    })

  }

  isFriend(id: any) {
    if (this.amis) {
      if (this.amis.find((e: any) => e == id) == undefined) {
        return false;
      } else {
        return true
      }
    }

    return false;
  }


}
