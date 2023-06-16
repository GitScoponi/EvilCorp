import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchAct = false;
  value = '';
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clear() {
    this.value = '';
    this.search.emit('');
  }
  enviarValue() {
    this.search.emit(this.value);
  }

}
