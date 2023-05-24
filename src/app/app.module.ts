import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  IConfig, NgxMaskDirective, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { ConfirmarDadosComponent } from './components/confirmar-dados/confirmar-dados.component'
const maskConfig: Partial<IConfig> = {
  validation: false,
};
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
    ConfirmarDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective 
  ],
  providers: [provideNgxMask(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
