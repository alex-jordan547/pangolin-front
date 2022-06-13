import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PangolinService} from "../pangolin.service";

@Component({
  selector: 'app-pangolin',
  templateUrl: './pangolin.component.html',
  styleUrls: ['./pangolin.component.css']
})
export class PangolinComponent implements OnInit{

  role = null
  pangolin:any
  amis:any
  constructor(private service:PangolinService) { }

  ngOnInit(): void {
    this.service.show()
      .then( () => {
        this.role = this.service.pangolin.role;
        this.pangolin = this.service.pangolin;
        this.amis = this.service.amis
      })

  }



}
