import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteCadProj } from './Componentes/telaCadProj/component.cadProj';
import { ComponenteCadUser } from './Componentes/telaCadUser/component.cadUser';
import { ComponenteConfirmar } from './Componentes/telaConfirm/component.confirm';
import { ComponenteDiario } from './Componentes/telaDiario/component.diario';
import { ComponenteLogin } from './Componentes/telaLogin/component.telaLogin';
import { ComponenteManUser } from './Componentes/telaManUser/component.manUser';
import { ComponenteProjUser } from './Componentes/telaProjUser/component.projUser';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: ComponenteLogin },
  { path: 'projUser', component: ComponenteProjUser },
  { path: 'cadUser', component: ComponenteCadUser },
  { path: 'cadProj', component: ComponenteCadProj },
  { path: 'diario', component:  ComponenteDiario },
  { path: 'confirma', component: ComponenteConfirmar },	
  { path: 'verificar', component: ComponenteManUser},
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]


})
export class AppRoutingModule { }
