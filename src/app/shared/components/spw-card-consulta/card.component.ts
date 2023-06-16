import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParametrosCard } from './card.interface';
import { cardAPI } from './cardAPI.service';
import { DadosCartao, IDadosMostrar } from './dadosCard.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'spw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  parametros: ParametrosCard;
  dadosMostrar: IDadosMostrar[] = [];
  Keys: string = '';
  dadosMostrar2: any[] = [];
  dadoMostrar: IDadosMostrar;
  @Input() DadosCartao: DadosCartao[];
  @Input() qtdDadosMostar: number;
  @Input() ParametrosRequest: any;
  @Input() URL: string;
  @Input() URLDetail: string;
  @Input() Detail: boolean;
  @Output() acaoCard: EventEmitter<string> = new EventEmitter();
  @Output() botaoCard: EventEmitter<string> = new EventEmitter();
  @Output() botaoDetail: EventEmitter<any> = new EventEmitter();
  pagina: number = 0;
  carregando: string = 'carregar';
  filtro: string = '';
  pesquisa: string = '';
  mostrarCarregarMaisDados: boolean = true;
  mostrarTextoVazio: string = 'dados';
  ParametrosDetail: any;

  constructor(private api: cardAPI) { }

  ngOnInit() {
    this.carregarDados();
  }
  carregarMaisDados() {
    this.pagina = this.pagina + 10;
    this.carregarDados();
  }

  clickButton(dados: IDadosMostrar[]) {
    let json = '{';
    dados.forEach((dado, index) => {
      json = json + '"' + dado.tituloReal + '":"' + dado.campo + '"';
      if (index < dados.length - 1) {
        json = json + ',';
      }
    });
    json = json + '}';
    this.botaoCard.emit(json);
  }

  clickLink(dados: IDadosMostrar[]) {
    let json = '{';
    dados.forEach((dado, index) => {
      json = json + '"' + dado.tituloReal + '":"' + dado.campo + '"';
      if (index < dados.length - 1) {
        json = json + ',';
      }
    });
    json = json + '}';
    this.acaoCard.emit(json);
  }
  clickDetail(paramtros: any, index: any) {
    var json = '{';
    this.dadosMostrar2[index].forEach((element: any) => {
      json =
        json +
        '"' +
        element.titulo.replace(' ', '_').replace('/', '_') +
        '":"' +
        this.tratarCampo(element.type, element.campo) +
        '",';
    });
    json = json
      .substring(0, json.length - 1)
      .replace(/\\n/g, '\\n')
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, '\\&')
      .replace(/\\r/g, '\\r')
      .replace(/\\t/g, '\\t')
      .replace(/\\b/g, '\\b')
      .replace(/\\f/g, '\\f')
      .replace(/[\u0000-\u0019]+/g, '');
    json = json + '}';
    paramtros = paramtros + 'Conselho=' + '';
    this.api.obterParametrosDetail(paramtros, this.URLDetail).subscribe(
      (x) => {
        this.botaoDetail.emit({ DadosCard: JSON.parse(json), DadosDetail: x });
      },
      (e) => (x: any) => {
        console.log(x);
      }
    );
  }

  carregarDados() {
    this.carregando = 'carregando';
    this.parametros = new ParametrosCard();
    this.parametros.Skip = this.pagina;
    this.parametros.Take = this.qtdDadosMostar;
    this.parametros.Filter = this.filtro;
    this.api
      .obterParametrosCard(this.parametros, this.URL, this.ParametrosRequest)
      .subscribe({
        next: (info: any) => {
          const dados = info['data'];
          if (dados.length < 10) {
            this.mostrarCarregarMaisDados = false;
          } else {
            this.mostrarCarregarMaisDados = true;
          }
          if (dados.length <= 0) {
            this.mostrarTextoVazio = 'vazio';
          } else {
            this.mostrarTextoVazio = 'dados';
            dados.forEach((dado: any) => {
              this.Keys = '';
              this.dadosMostrar = [];
              this.DadosCartao.forEach((dadoCartao) => {
                if (dadoCartao.key == 'SIM')
                  this.Keys =
                    this.Keys +
                    dadoCartao.campo +
                    '=' +
                    dado[dadoCartao.campo] +
                    '&';
                this.dadoMostrar = new DadosCartao();
                this.dadoMostrar.type = dadoCartao.type;
                this.dadoMostrar.tituloReal = dadoCartao.campo;
                this.dadoMostrar.botao = dadoCartao.botao;
                this.dadoMostrar.campo = dado[dadoCartao.campo];
                this.dadoMostrar.campoMostrar = dado[dadoCartao.campo];
                this.dadoMostrar.titulo = dadoCartao.titulo;
                const regExp = new RegExp(this.pesquisa, 'gi');
                if (
                  this.pesquisa !== '' &&
                  regExp.test(this.dadoMostrar.campo)
                ) {
                  const campomarcado = this.dadoMostrar.campo.replace(
                    regExp,
                    (x) => {
                      x = '<span class="blue text-white">' + x + '</span>';
                      return x;
                    }
                  );
                  this.dadoMostrar.campoMostrar = campomarcado;
                }
                this.dadoMostrar.mostrarTitulo = dadoCartao.mostrarTitulo;
                this.dadoMostrar.ordenacao = dadoCartao.ordenacao;
                this.dadoMostrar.link = dadoCartao.link;
                this.dadoMostrar.key = this.Keys;
                this.dadosMostrar.push(this.dadoMostrar);
              });
              this.dadosMostrar.sort(this.comparar);
              this.dadosMostrar2.push(this.dadosMostrar);
            });
          }
          this.carregando = 'carregar';
        },
        error: (err) => {
          this.carregando = 'erro';
          this.mostrarTextoVazio = 'erro';
        },
      });
  }

  tratarCampo(type: string, campo: string) {
    switch (type) {
      case 'date':
        return new Date(campo).toLocaleString().substring(0, 10);
      case 'currency':
        return (
          'R$' + Number.parseFloat(campo.replace(',', '.')).toLocaleString()
        );
      default:
        return campo;
    }
  }

  comparar(a: any, b: any) {
    if (a.ordenacao < b.ordenacao) {
      return -1;
    }
    if (a.ordenacao > b.ordenacao) {
      return 1;
    }
    return 0;
  }

  consultar() {
    this.mostrarTextoVazio = 'carregando';
    this.pagina = 0;
    this.filtro = '';
    this.dadosMostrar2 = [];
    let filtrointerno = '';
    this.DadosCartao.forEach((dadoCartao) => {
      filtrointerno = '[';
      filtrointerno = filtrointerno + '%27' + dadoCartao.campo + '%27' + ',';
      filtrointerno = filtrointerno + '%27contains%27,';
      filtrointerno = filtrointerno + '%27' + this.pesquisa + '%27' + ']';
      this.filtro = this.filtro + filtrointerno;
      this.filtro = this.filtro + ',%27or%27,';
    });
    this.carregarDados();
  }

  limparFiltro() {
    this.pagina = 0;
    this.filtro = '';
    this.pesquisa = '';
    this.dadosMostrar2 = [];
    this.carregarDados();
  }
}
