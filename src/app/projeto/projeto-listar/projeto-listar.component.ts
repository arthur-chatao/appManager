import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Projeto } from '../entidade/projeto';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import { ProjetoSalvarComponent } from '../projeto-salvar/projeto-salvar.component';

@Component({
  selector: 'app-projeto-listar',
  templateUrl: './projeto-listar.component.html',
  styleUrls: ['./projeto-listar.component.scss'],
})
export class ProjetoListarComponent implements OnInit {

  listaProjetos: Observable<Projeto[]>;
  listaFiltro: Projeto[];
  filtro = {}; //regras ativas do filtro
  projetos: any;
  valor: string;



  constructor(private fire: AngularFireDatabase,private afAuth: AngularFireAuth, private router: Router, private modal: ModalController){
    this.listaProjetos = this.fire.list<Projeto>('projeto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() {
    this.listaProjetos.subscribe(cidade => {
        this.projetos = cidade;
        this.listaFiltro = _.filter(this.projetos, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['newProj'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.projetos, _.conforms(this.filtro));
  }

  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['home']);
  }

  excluir(chave) {

      this.fire.list('projeto').remove(chave);
      alert("Excluso Com sucesso");

  }

async alterar(projeto){
const tela = await this.modal.create({
component: ProjetoSalvarComponent, componentProps : { projeto : projeto }
});
tela.present();
}

}
