import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { ConfirmarDadosComponent } from './components/confirmar-dados/confirmar-dados.component';
import { ExtratoComponent } from './components/extrato/extrato.component';

const routes: Routes = [
  { path: '',   redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component:HomeComponent, children:[
    { path: '', component: ExtratoComponent },
    { path: 'transferir', component: TransferirComponent },
    { path: 'pagar', component: PagarComponent },
    { path: 'confirmardados', component: ConfirmarDadosComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
