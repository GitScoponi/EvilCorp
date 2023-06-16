export class Header {
  Titulo: string;
  Rota: string;
  Link: String;
  Params: String;

  constructor(titulo: string, rota: string, link: string, params?: any ) {
    this.Titulo = titulo;
    this.Rota = rota;
    this.Link = link;
    this.Params = params;
  }
}
