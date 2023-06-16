import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { Header } from "./header";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  header: ReplaySubject<Header[]> = new ReplaySubject<Header[]>(1);
  logo: ReplaySubject<string> = new ReplaySubject<string>(1);
  mostraMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http:HttpClient) { }

  

  enviarParametros(paramentros: Header[]) {
    this.header.next(paramentros);
  }
  mostrarMenu(mostrar: boolean) {
    this.mostraMenu.next(mostrar);
  }
  enviarLogo(logo: string) {
    this.logo.next(`./assets/LOGOS/${logo}.png`);
  }

}
