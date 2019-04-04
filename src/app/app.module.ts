import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerModule } from './seller/seller.module';
import { HomeComponent } from './home/home.component';
import { MemberdetailsComponent } from './members/memberdetails/memberdetails.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberChildComponent } from './members/member-child/member-child.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      MemberdetailsComponent,
      MembersListComponent,
      MemberChildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // SellerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
