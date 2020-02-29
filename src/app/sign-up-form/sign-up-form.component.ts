import { Component, OnInit, ComponentFactoryResolver, Input, } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm, FormsModule  } from '@angular/forms';
import { SignUp } from '../signUp';
import { BillingAddress } from '../billingAddress';
import { Address } from '../address';
import { ShippingAddress } from '../shippingAddress';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {


  private signUpForm: NgForm;

  private count = 1 ;
  phoneNumberIds: number[] = [1] ;
  sameAddressChecked = false ;
  addressFormReset = false ;

  isSubmitted = false ;

  profile: SignUp = new SignUp();

  updates: string[] = [
    'SMS',
    'EMAIL',
    'WHATSAPP'

  ];





  myAddress = new Address();

  shippingAddress = new Address();
  billingAddress = new Address();

  getShippingAddress( $event: Address ) {
    this.myAddress = $event;
    console.log('myAddress:', this.myAddress);
    this.shippingAddress.line1 = this.myAddress.line1;
    this.shippingAddress.line2 = this.myAddress.line2;
    this.shippingAddress.city = this.myAddress.city;
    this.shippingAddress.state = this.myAddress.state;
    this.shippingAddress.country = this.myAddress.country;
    this.shippingAddress.zip = this.myAddress.zip;
    console.log('shippingAddressobj', this.shippingAddress);
    console.log('billingAddressfinal', this.billingAddress);
  }

  getBillingAddress( $event: Address ) {
    this.myAddress = $event;
    console.log('myAddress', this.myAddress);

    this.billingAddress.line1 = this.myAddress.line1;
    this.billingAddress.line2 = this.myAddress.line2;
    this.billingAddress.city = this.myAddress.city;
    this.billingAddress.state = this.myAddress.state;
    this.billingAddress.country = this.myAddress.country;
    this.billingAddress.zip = this.myAddress.zip;

    console.log('billingAddressobj', this.billingAddress);
    console.log('shippingAddresfinal', this.shippingAddress);

  }

  sameAddress1() {

    this.sameAddressChecked = !this.sameAddressChecked ;
    if (this.sameAddressChecked) {

      this.billingAddress.line1 = this.shippingAddress.line1 ;
      this.billingAddress.line2 = this.shippingAddress.line2 ;
      this.billingAddress.city = this.shippingAddress.city ;
      this.billingAddress.state = this.shippingAddress.state ;
      this.billingAddress.country = this.shippingAddress.country ;
      this.billingAddress.zip = this.shippingAddress.zip ;
      console.log('billingAddressfinal', this.billingAddress);



    }

  }









  /***************************************************************** */



// ****************************  without using  reusable component ****************************************** */




  remove(i: number) {
    this.phoneNumberIds.splice(i, 1);
  }
   add() {
     this.phoneNumberIds.push(++this.count);
   }


reset(signUpForm: NgForm) {
     signUpForm.resetForm();
     this.billingAddress = new Address();
     this.shippingAddress = new Address();



}
save(signUpForm: NgForm) {
  this.isSubmitted = true ;
  console.log(signUpForm.value.phoneNumber);
  this.profile.firstName = signUpForm.value.firstName ;
  this.profile.lastName = signUpForm.value.lastName;
  this.profile.email = signUpForm.value.email;
  this.profile.userType = signUpForm.value.userType;
  this.profile.phoneNumber = signUpForm.value.phoneNumber;



  }

  ngOnInit() { }
  constructor() { }

}
