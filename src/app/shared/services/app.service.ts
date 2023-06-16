import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  panel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  ativarPanel() {
    this.panel.next(true);

  }
  desativarPanel() {
    this.panel.next(false);

  }

  
}

