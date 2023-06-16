import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  @Input() rota: string;
  @Input() params: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    if (this.params) {
      this._router.navigate([this.rota], { queryParams: this.params });
    } else {
      this._router.navigate([this.rota]);
    }
  }

}
