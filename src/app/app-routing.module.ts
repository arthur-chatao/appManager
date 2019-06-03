import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCadProj } from './projeto/telaCadProj/component.cadProj';
import { ComponenteCadUser } from './usuario/telaCadUser/component.cadUser';
import { ComponenteConfirmar } from './diario/telaConfirm/component.confirm';
import { ComponenteDiario } from './diario/telaDiario/component.diario';
import { ComponenteLogin } from './usuario/telaLogin/component.telaLogin';
import { ComponenteProjUser } from './projeto/telaProjUser/component.projUser';
import { ComponenteCadConfirm } from './usuario/telaCadConfir/component.cadConfirm';
import { ComponenteVisual } from './diario/telaVisual/component.visual';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: ComponenteLogin },
  { path: 'projUser', component: ComponenteProjUser },
  { path: 'cadUser', component: ComponenteCadUser },
  { path: 'cadProj', component: ComponenteCadProj },
  { path: 'diario', component: ComponenteDiario },
  { path: 'confirma', component: ComponenteConfirmar },
  { path: 'cadOK', component: ComponenteCadConfirm },
  { path: 'gerar', component: ComponenteVisual }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
