import { Component, OnInit } from '@angular/core';
import { Customer, Month, Year } from '../customer';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.css']
})
export class PaymentOptionComponent implements OnInit {

  months = Month;
  years = Year;
  user : Customer = {
    name: null,
    cardNumber: null,
    expireMonth: null,
    expireYear: null,
    securityCode: null,
  }
  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

}
