export interface IFiltro {
    Sistema: string;
    Rotina: string;
    Modelo: string;
    CodigoUsuario: string;
    Nome: string;
    Visivel: string;
    MSSQL: string;
    DEVSQL: string;
    Descricao: string;
  }
  
  export class FiltroClasse implements IFiltro {
    constructor(obj: Partial<FiltroClasse> = {}) {
      Object.assign(this, obj)
    }
    Sistema: string;
    Rotina: string;
    Modelo: string;
    CodigoUsuario: string;
    Nome: string;
    Visivel: string;
    MSSQL: string;
    DEVSQL: string;
    Descricao: string;
  }
  export interface IVisaoPadrao {
    Sistema: string;
    Rotina: string;
    Modelo: string;
    CodigoUsuario: string;
    Nome: string;
    Visivel: string;
    json: string;
  }
  
  export class VisaoPadraoClasse implements IVisaoPadrao {
    constructor(obj: Partial<VisaoPadraoClasse> = {}) {
      Object.assign(this, obj);
  
    }
    Sistema: string;
    Rotina: string;
    Modelo: string;
    CodigoUsuario: string;
    Nome: string;
    Visivel: string;
    json: string;
  }
  
  export interface IVisao {
    allowedPageSizes: number[];
    columns: columnsClasse[];
    filterPanel: filterPanelClasse;
    filterValue: string;
    pageIndex: number;
    pageSize: number;
    searchText: string;
  }
  
  export class VisaoClasse implements IVisao {
    constructor(obj: Partial<VisaoClasse> = {}) {
      Object.assign(this, obj);
    }
    allowedPageSizes: number[];
    columns: columnsClasse[];
    filterPanel: filterPanelClasse;
    filterValue: string;
    pageIndex: number;
    pageSize: number;
    searchText: string;
  }
  
  export interface Icolumns {
    dataField: string;
    dataType: string;
    visible: boolean;
    visibleIndex: number;
    width: number;
  }
  
  export class columnsClasse implements Icolumns {
    constructor(obj: Partial<columnsClasse> = {}) {
      Object.assign(this, obj)
  
    }
    dataField: string;
    dataType: string;
    visible: boolean;
    visibleIndex: number;
    width: number;
  }
  
  export interface IfilterPanel {
    filterEnabled: boolean;
  }
  
  export class filterPanelClasse implements IfilterPanel {
    constructor(public filterEnabled: boolean = false) {
  
    }
  }
  
  export class FiltroPassagem {
    Filtro: FiltroClasse
    CombinedFilter: string;
    constructor(obj: Partial<FiltroPassagem> = {}) {
      Object.assign(this, obj)
    }
  }
  export class FiltroCard {
    Campo: string;
    sinal: string;
    Valor: string;
    constructor(filtro: Partial<FiltroCard> = {}) {
        Object.assign(this, filtro)
        if (filtro.sinal == null)
            this.sinal = "=";
    }
  }
  