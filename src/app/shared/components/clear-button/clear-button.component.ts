import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.scss']
})
export class ClearButtonComponent implements OnInit {
  @Output() clear: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  limparCampo(){
    this.clear.emit('');
  }

}
