import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormdisplayComponent } from './formdisplay/formdisplay.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    FormdisplayComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
