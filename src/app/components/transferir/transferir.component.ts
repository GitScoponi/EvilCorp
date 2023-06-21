import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { TransacaoDTO } from 'src/app/model/TransacaoDTO';
import { ClienteService } from 'src/app/services/cliente.service';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { SideBarService } from '../side-bar/side-bar.service';
import { SPWAlert } from 'src/app/shared/class/Alert';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.scss']
})
export class TransferirComponent {

  constructor(
    private _cliente: ClienteService,
    private _sideBar: SideBarService,
    private _router: Router
  ) { }
  transferir(f: NgForm) {
    if (f.valid) {
      var request = Object.assign(new TransacaoDTO(), f.value)
      this._cliente.transferir(request).subscribe(x => {
        this._sideBar.atualizarExtrato();
        this._router.navigate(['/user'])
        SPWAlert.AlertaSucesso("Transferência realizada com sucesso!");

      });

    } else {
      SPWAlert.AlertaAviso("Preencha todos os campos!");
    }

  }
}
