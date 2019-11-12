import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LivreComponent } from './livre/livre.component';
import { LivresListComponent } from './livres-list/livres-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LivresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
