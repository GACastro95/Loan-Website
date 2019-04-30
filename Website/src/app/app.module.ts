import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './layout/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { LoansComponent } from './loans/loans.component';
import { MessagesComponent } from './messages/messages.component';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoanDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
