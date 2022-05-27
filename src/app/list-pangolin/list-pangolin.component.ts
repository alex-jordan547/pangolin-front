import {Component, OnInit} from '@angular/core';
import {PangolinService} from "../pangolin.service";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-list-pangolin',
  templateUrl: './list-pangolin.component.html',
  styleUrls: ['./list-pangolin.component.css']
})
export class ListPangolinComponent implements OnInit {

  ListPango: any
  amis: any;

  pangolin: any

  constructor(private service: PangolinService, private router: Router) {

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

    return false
  }


}
