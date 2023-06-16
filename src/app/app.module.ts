import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IConfig, NgxMaskDirective, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { ConfirmarDadosComponent } from './components/confirmar-dados/confirmar-dados.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBR from '@angular/common/locales/pt';
import { Router } from '@angular/router';
import { HttpErrorInterceptor } from './shared/class/HttpErrorInterceptor';
import { AppService } from './shared/services/app.service';
import { LoadPanelComponent } from './shared/components/load-panel/load-panel.component';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
registerLocaleData(localePtBR);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SideBarComponent,
    ExtratoComponent,
    TransferirComponent,
    PagarComponent,
    ConfirmarDadosComponent,
    LoadPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    HttpClientModule,
    FormsModule
  ],
  providers: [provideNgxMask(), { provide: LOCALE_ID, useValue: 'pt-BR' },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
    deps: [Router, AppService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
