import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  SideBar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  NomeCPF: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }
  atualizarExtrato() {
    this.SideBar.next(true);
  }
  listarNomeCPF(){
return this.NomeCPF
  }
}
