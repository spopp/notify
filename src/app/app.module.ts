import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'
import { RouterModule, RouterLink } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, PageNotFoundComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule, AppRoutingModule, ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
