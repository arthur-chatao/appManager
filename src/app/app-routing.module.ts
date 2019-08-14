import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UsuarioSalvarComponent } from './usuario/usuario-salvar/usuario-salvar.component';
import { ComponenteConfirmar } from './diario/telaConfirm/component.confirm';
import { DiarioSalvarComponent } from './diario/diario-salvar/diario-salvar.component';
import { ComponenteLogin } from './usuario/telaLogin/component.telaLogin';
import { ComponenteCadConfirm } from './usuario/telaCadConfir/component.cadConfirm';
import { ProjetoSalvarComponent } from './projeto/projeto-salvar/projeto-salvar.component';
import { ProjetoListarComponent } from './projeto/projeto-listar/projeto-listar.component';
import { DiarioListarComponent } from './diario/diario-listar/diario-listar.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component: ComponenteLogin },
  { path: 'cadUser', component: UsuarioSalvarComponent },
  { path: 'cadProj', component: ProjetoSalvarComponent },
  { path: 'diario', component: DiarioSalvarComponent },
  { path: 'confirma', component: ComponenteConfirmar },
  { path: 'cadOK', component: ComponenteCadConfirm },
  { path: 'projL', component: ProjetoListarComponent },
  { path: 'diariol', component: DiarioListarComponent },  { path: 'curso', loadChildren: './curso/salvar/salvar.module#SalvarPageModule' },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
