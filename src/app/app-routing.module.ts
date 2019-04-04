import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberdetailsComponent } from './members/memberdetails/memberdetails.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberChildComponent } from './members/member-child/member-child.component';

// const routes: Routes = [
//   {
//     path: 'customers',
//     loadChildren: './customers/customers.module#CustomersModule'
//   },
//   {
//     path: 'orders',
//     loadChildren: './orders/orders.module#OrdersModule'
//   },
//   {
//     path: 'seller',
//     loadChildren: './seller/seller.module#SellerModule'
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

// const routes: Routes = [

//    // { path: '', redirectTo: '/memberdetails', pathMatch: 'full'},
//   { path: '',  component: HomeComponent},
//   { path: 'home', component: HomeComponent },
//   { path: 'memberdetails', component: MemberdetailsComponent },
//   { path: 'memberslist', component: MembersListComponent },
//   { path: '**', redirectTo: '/errorpage', pathMatch: 'full' }
// ];

// Child Route
const routes: Routes = [

 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: 'home', component: HomeComponent },
 {
    path: 'members' , component: MemberChildComponent ,
    children: [
        { path: 'memberslist', component: MembersListComponent },
        { path: 'memberdetails/:id', component: MemberdetailsComponent}
    ]
 },
 { path: '**', redirectTo: 'errorpage', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
