import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TotemComponent } from './totem/totem.component';
import { LoginComponent } from './login/login.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { CompteComponent } from './compte/compte.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TotemComponent,
    LoginComponent,
    TetiereComponent,
    CompteComponent,
    RecapitulatifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
