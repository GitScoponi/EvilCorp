import { NgModel } from '@angular/forms';
import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'spw-input',
  templateUrl: './input.component.html',
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  input: any;
  @Input() label: string;
  @Input() errorMessage: string;
  @Input() class: string;
  @Input() obrigatorio: boolean=false;

  @ContentChild(NgModel,{static:false}) model: NgModel;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
  
  }


}
