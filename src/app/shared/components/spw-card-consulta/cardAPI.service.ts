import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, take, map } from 'rxjs/operators';
import { IParametrosCard, ParametrosCard } from './card.interface';
import { getUrl } from 'src/app/services/base/BASEURL';

@Injectable({
  providedIn: 'root',
})
export class cardAPI {
  atualizarDados: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private url = getUrl()
  constructor(private http: HttpClient) { }

  obterParametrosCard(
    dadosAPI: ParametrosCard,
    URL: string,
    paramentrosRequest?: object
  ) {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let params = new HttpParams({
      fromString: dadosAPI.enviarParametrosAPI(paramentrosRequest),
    });
    let options = { headers, params };
    return this.http.get(this.url + URL, options).pipe(
      tap((x) => {
        // console.log('Informações', x);
      }),
      catchError(this.handleError),
      take(1)
    );
  }
  obterParametrosDetail(dadosAPI: any, URL: string) {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let params = new HttpParams({
      fromString: dadosAPI,
    });

    let options = { headers, params };
    return this.http.get(this.url + URL, options).pipe(
      tap((x) => {
        // console.log('InformaçõesDetail', x);
      }),
      catchError(this.handleError),
      take(1)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side ou conexão
      errorMessage = `Ocorreu um erro: ${err.error.message}`;
    } else {
      // Erro no backend ou resposta sem sucesso.
      errorMessage = `Servidor retornou o código: ${err.status}, a mensagem é: ${err.message} `;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
