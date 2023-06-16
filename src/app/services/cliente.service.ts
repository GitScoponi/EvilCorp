import { TransacaoDTO } from './../model/TransacaoDTO';
import { Injectable } from '@angular/core';
import { URLBASE, getHeaders, getHeadersAuthorize } from '../base/services.base';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDTO } from '../model/LoginDTO';
import { PagamentoDTO } from '../model/PagamentoDTO';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string = URLBASE + 'cliente/';

  constructor(private http: HttpClient) { }

  listarCompleto(): Observable<any> {
    return this.http.get(this.url + 'ListarContas',
      getHeadersAuthorize()
    )
  }
  listarTransacoes(): Observable<any> {
    return this.http.get(this.url + 'listarTransacoes',
      getHeadersAuthorize()
    )
  }
  transferir(TransacaoDTO: TransacaoDTO): Observable<any> {
    return this.http.post<string>(this.url + 'Transferir', TransacaoDTO,
      getHeadersAuthorize()
    )
  }
  pagar(pagamento: PagamentoDTO): Observable<any> {
    return this.http.post<string>(this.url + 'Pagar', pagamento,
      getHeadersAuthorize()
    )
  }
}
