import { Component, OnInit } from '@angular/core';
import { Projeto } from '../entidade/projeto';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-projeto-salvar',
  templateUrl: './projeto-salvar.component.html',
  styleUrls: ['./projeto-salvar.component.scss'],
})
export class ProjetoSalvarComponent implements OnInit {
  projeto: Projeto = new Projeto();
  constructor(private banco: AngularFireDatabase) { }



  ngOnInit() { }

  projSalvar() {
    this.banco.list('projeto').push(this.projeto);
    this.projeto = new Projeto();
    alert("Salvo Com sucesso");
  }

}
