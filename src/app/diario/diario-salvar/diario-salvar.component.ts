import { Component, OnInit } from '@angular/core';
import { Diario } from '../entidade/diario';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diario-salvar',
  templateUrl: './diario-salvar.component.html',
  styleUrls: ['./diario-salvar.component.scss'],
})
export class DiarioSalvarComponent implements OnInit {


  diario: Diario = new Diario();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() { }

  diarioSalvar() {

    this.banco.list('diario').push(this.diario);
    this.diario = new Diario();
    this.rota.navigate(['confirma']) ;
  }

}
