import { Component } from '@angular/core';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EvilCorpUI';
  panel: boolean = false;
  constructor(private app: AppService) {
    app.panel.subscribe(x => {
      this.panel = x;
    })
  }
}
