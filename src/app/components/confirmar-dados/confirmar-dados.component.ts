import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { GerarCNPJ } from "documento-validacao-br";
import { PagamentoDTO } from 'src/app/model/PagamentoDTO';
import { ClienteService } from 'src/app/services/cliente.service';
import { SPWAlert } from 'src/app/shared/class/Alert';
import { SideBarService } from '../side-bar/side-bar.service';
@Component({
  selector: 'app-confirmar-dados',
  templateUrl: './confirmar-dados.component.html',
  styleUrls: ['./confirmar-dados.component.scss']
})
export class ConfirmarDadosComponent {
  empresas: any[] = [];
  dados: any = {};
  nomesBancarios: string[] = [
    "Banco do Brasil",
    "Caixa Econômica Federal",
    "Itaú Unibanco",
    "Banco Santander",
    "Banco Bradesco",
    "Banco Inter",
    "Banco Safra",
    "Banco BTG Pactual",
    "Banco Votorantim",
    "Banco Original",
    "Banco Neon",
    "Banco Nubank",
    "Banco PagSeguro",
    "Banco BMG",
    "Banco Pine",
    "Banco C6",
    "Banco Pan",
    "Banco Daycoval",
    "Banco Modal",
    "Banco Sofisa Direto",
    // Adicione outros nomes bancários aqui...
  ];
  constructor(
    private actRouter: ActivatedRoute,
    private service: ClienteService,
    private router: Router,
    private side: SideBarService) {
    for (let i = 0; i < 100; i++) {
      const nomeEmpresa = faker.company.name();
      const valor = Math.floor(Math.random() * 1000) + 1;
      const cnpj = new GerarCNPJ('xx.xxx.xxx/xxxx-xx').execute()
      const banco: string = this.nomesBancarios[Math.floor(Math.random() * this.nomesBancarios.length)];

      this.empresas.push({
        nome: nomeEmpresa,
        valor: valor,
        cnpj: cnpj,
        instituicao: banco,
        vencimento: new Date().toDateString(),
        codigo: '1234.1234.1234.1234 1 1234'
      });
    }
    this.dados = this.empresas[Math.floor(Math.random() * this.empresas.length)];
    this.actRouter.queryParams.subscribe((x: any) => {
      this.dados.codigo = x.codigo;
    })
  }

  pagar() {
    var request = new PagamentoDTO();
    request.Nome = this.dados.nome;
    request.Valor = this.dados.valor;
    request.CNPJ = this.dados.cnpj;
    request.Instituicao = this.dados.instituicao;
    request.Vencimento = this.dados.vencimento;
    request.Codigo = this.dados.codigo;
    this.service.pagar(request).subscribe(x => {
      SPWAlert.AlertaSucesso("Pagamento realizado com sucesso");
      this.side.atualizarExtrato();
      this.router.navigate(['/user']);
    })
  }

}
