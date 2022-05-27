import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PangolinComponent} from "./pangolin/pangolin.component";
import {AuthentificationGuard} from "./authentification.guard";
import {PangolinEditComponent} from "./pangolin-edit/pangolin-edit.component";
import {ListPangolinComponent} from "./list-pangolin/list-pangolin.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'pangolin', component:PangolinComponent,canActivate:[AuthentificationGuard]},
  {path:'pangolin_modifier', component:PangolinEditComponent,canActivate:[AuthentificationGuard]},
  {path:'pangolin_list', component:ListPangolinComponent,canActivate:[AuthentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
