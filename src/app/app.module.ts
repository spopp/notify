import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'
import { RouterModule, RouterLink } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

import { ClarityModule } from 'clarity-angular';

// Material 2
import { MdIconModule } from '@angular2-material/icon';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, PageNotFoundComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule, AppRoutingModule,
    ClarityModule,
    MdIconModule, MdCoreModule, MdCardModule, MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
