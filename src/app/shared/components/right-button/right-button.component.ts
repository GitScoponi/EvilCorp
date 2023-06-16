import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-button',
  templateUrl: './right-button.component.html',
  styleUrls: ['./right-button.component.scss']
})
export class RightButtonComponent implements OnInit {
 @Output() acao = new EventEmitter();
 @Input() icon:string;
 @Input() top:string;
  constructor() { }

  ngOnInit(): void {
  }

  enviarClick(){
    this.acao.emit('');
  }

}
