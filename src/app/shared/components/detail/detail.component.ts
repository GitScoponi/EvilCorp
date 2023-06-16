import { Component, Input, OnInit } from '@angular/core';
import { Detail } from './detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() Propriedades:Detail[]=[];
  @Input() Data:any=[];
  @Input() Tamanho = 100;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Data['Sistema'])
    
  }

}
