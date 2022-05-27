import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { PangolinEditComponent } from './pangolin-edit/pangolin-edit.component';
import { ListPangolinComponent } from './list-pangolin/list-pangolin.component';
import { StoreModule } from '@ngrx/store';
import {metaReducers, rootReducer} from "./state/reducter";
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PangolinComponent,
    PangolinEditComponent,
    ListPangolinComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      root: rootReducer
    }, {
      metaReducers: metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
