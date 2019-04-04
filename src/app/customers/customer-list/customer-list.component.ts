import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
