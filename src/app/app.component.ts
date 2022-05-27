import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {PangolinService} from "./pangolin.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  title = 'pangolin';
  Suscriber:any;
  isLoggedIn:any;

  data: Observable<any> = {} as Observable<any>;

  constructor(private  store:Store,private router:Router,private service:PangolinService) { }


  ngOnInit() {
    this.data =  this.store.select((state :any) => state.root)
    console.log(this.data.subscribe(value => {

    }))

   this.Suscriber =  this.service.isLoggedIn.subscribe( value => {
      this.isLoggedIn = value
    });

    console.log('pangolin user',this.service.pangolin)
    console.log('login?',this.isLoggedIn)
  }



  ngOnDestroy() {
    this.Suscriber.unsubscribe();
  }

  logout(){
    this.service.doLogout()
    this.router.navigate(['/login'])
  }

}
