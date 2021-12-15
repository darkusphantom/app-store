import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GuestsComponent } from './components/guests/guests.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { GuestFormComponent } from './components/guest-form/guest-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    GuestFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
