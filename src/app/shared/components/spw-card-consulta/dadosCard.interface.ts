export interface IDadosCartao {
  campo: string; // nome do campo original que vem da requisição
  titulo: string; // titulo para mostrar no card
  ordenacao?: number; // ordenação dos campos no card
  mostrarTitulo?: boolean; // opção para verificar se mostra ou não o título junto com o valor
  link?: boolean; // Se o campo será um link para poder clicar
  botao?: boolean; // template para botão
  type: string; // tipo do campo / date - currency
  key: string; // chaves primarias
}

export interface IDadosMostrar {
  campo: string;
  titulo: string;
  mostrarTitulo: boolean;
  link: boolean;
  ordenacao: number;
  tituloReal?: string;
  campoMostrar?: string;
  botao?: boolean;
  type?: string;
  key?: string;
}

export class DadosMostrar implements IDadosMostrar {
  constructor(
    public campo: string = '',
    public titulo: string = '',
    public mostrarTitulo: boolean = true,
    public link: boolean = false,
    public ordenacao: number = 0,
    public type: string = '',
    public key: string = ''
  ) {}
}

export class DadosCartao implements IDadosCartao {
  constructor(
    public campo: string = '',
    public titulo: string = '',
    public ordenacao: number = 0,
    public mostrarTitulo: boolean = true,
    public link: boolean = false,
    public botao: boolean = false,
    public type: string = '',
    public key: string = ''
  ) {}
}
