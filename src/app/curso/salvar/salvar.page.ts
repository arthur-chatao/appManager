import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Curso } from '../entidade/curso';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  curso: Curso = new Curso();

  constructor(private fire:AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('curso').push(this.curso);
    this.curso = new Curso();
    this.rota.navigate(['cadUser']);
  }

}