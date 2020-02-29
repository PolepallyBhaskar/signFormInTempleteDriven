import { Component, OnInit , Input, Output, AfterViewInit , OnChanges, SimpleChanges} from '@angular/core';
import { NgForm, FormsModule, FormGroup } from '@angular/forms';
// import { Billingaddress } from '../billingaddress';
import { Address } from '../address';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements   OnInit , OnChanges {

 isSubmitted = true ;

@Output() addressObjChange = new EventEmitter<Address>();
@Input() addressObj: Address;
@Input() update: boolean ;

@Input() resetAddressForm: boolean ;

 @ViewChild('addressForm', {static: false} ) formContent: NgForm;

  reset(addressForm: NgForm) {
    addressForm.form.reset();

 }
 if( formReset: boolean) {
  
 }
  constructor() { }



  ngOnInit() {  }


  // ngAfterViewInit()  {
  //   this.formContent.form.valueChanges.subscribe((val: any ) => {

  //      this.addressObj.line1 = val.line1;
  //      this.addressObj.line2 = val.line2;
  //      this.addressObj.city =  val.city;
  //      this.addressObj.state = val.state;
  //      this.addressObj.country = val.country;
  //      this.addressObj.zip = val.zip;
  //      this.address.emit(this.addressObj);
  //      console.log('addressObj', this.addressObj);
  //     });
  //     }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.addressObj) {

    //   this.formContent.form.setValue({
    //     line1 : changes.addressObj.currentValue.line1,
    //     line2 : changes.addressObj.currentValue.line2,
    //     city: changes.addressObj.currentValue.city,
    //     state: changes.addressObj.currentValue.state,
    //     country: changes.addressObj.currentValue.country,
    //     zip: changes.addressObj.currentValue.zip

    //   });
      this.addressObjChange.emit(this.addressObj);

    }
  }



  }








