import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {loggin, setDada, setFriend} from "./state/actions";
import {Store} from "@ngrx/store";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  pangolin:any;
  amis:any;
  id:any;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isAuthenticatedSubject.asObservable();

  constructor(private router:Router,private store:Store) { }


  show(){
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:5000/Pangolin/'+this.id).then(resp=>{
        resp.json().then(data=>{
          this.pangolin = data;
          this.isAuthenticatedSubject.next(true);
          resolve("ok")
        })
      })
    })

  }
  listeOther(){
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:5000/allFriends').then(resp=>{
        resp.json().then(data=>{
          resolve(data)
          this.store.dispatch(setFriend({amis:data}))
        })
      })
    })

  }
  ajouterAmi(id: any){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({id:id})],{type:'application/json'})
      }
      fetch('http://localhost:5000/addFriend/'+this.id, init).then(resp=>{
        resp.json().then(data=>{
          resolve(data)

        })
      })
    })
  }
  supprimerAmi(id: any){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({id:id})],{type:'application/json'})
      }
      fetch('http://localhost:5000/deleteFriend/'+this.id,init).then(resp=>{
        resp.json().then(data=>{
          resolve(data)
        })
      })
    })
  }


  doLogout() {
    this.id = null;
    this.isAuthenticatedSubject.next(false);
  }
}
