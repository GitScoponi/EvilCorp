import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { retry, catchError, tap, delay, finalize } from "rxjs/operators";
import { SPWAlert } from "src/app/shared/class/Alert";
import { AppService } from "../services/app.service";
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private _app: AppService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token: string | null = localStorage.getItem('access_token');
    if (token ) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    this._app.ativarPanel();
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body.hasOwnProperty("hasErro")) {
            if (evt.body.hasErro == true) {
              console.log(evt.body.Erro);
              throw new Error('#SPW#' + evt.body.MensagemErro);
            }
          }
        }
      }),
      finalize(() => setTimeout((x:any) => this._app.desativarPanel(), 1000)),
      catchError((error: HttpErrorResponse) => {
        this._app.desativarPanel();
        return this.handleError(error);
      })
    );
  }

  handleError(error: any) {
    this._app.desativarPanel()
    let errorMessage;
    let mensagem = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      mensagem = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      mensagem = error.message;
    }
    switch (error.status) {
      case 0:
        SPWAlert.AlertaErro("Erro de conexão");
        break;
      case 401:
        this.router.navigate(["/login"]);
        break;
      default:
        if (mensagem.indexOf('#SPW#') != -1) {
          SPWAlert.AlertaErro(mensagem.substring(5));
        }
        break;
    }

    return throwError(errorMessage);
  }
}
