import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
