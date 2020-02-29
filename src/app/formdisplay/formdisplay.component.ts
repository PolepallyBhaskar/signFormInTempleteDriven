import { Component, OnInit, Input } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-formdisplay',
  templateUrl: './formdisplay.component.html',
  styleUrls: ['./formdisplay.component.css']
})
export class FormdisplayComponent implements OnInit {

  @Input() displayForm: Form ;



  constructor() { }

  ngOnInit() {
  }

}
