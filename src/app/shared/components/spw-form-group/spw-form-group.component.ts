import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spw-form-group',
  templateUrl: './spw-form-group.component.html',
  styleUrls: ['./spw-form-group.component.scss']
})
export class SpwFormGroupComponent implements OnInit {
@Input() error! : string;
@Input() titulo!:string;
@Input() obrigatorio:boolean = false;
@Input() readonly:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
