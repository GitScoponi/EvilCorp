import { Component } from '@angular/core';
import { SideBarService } from '../side-bar/side-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  NomeCPF :any= {};
  constructor(private side: SideBarService) {
    this.side.NomeCPF.subscribe(x => {
      this.NomeCPF = x;
    })
  }
}
