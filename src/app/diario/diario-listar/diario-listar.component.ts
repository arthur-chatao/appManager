import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Diario } from '../entidade/diario';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario-listar',
  templateUrl: './diario-listar.component.html',
  styleUrls: ['./diario-listar.component.scss'],
})
export class DiarioListarComponent implements OnInit {

  listaDiario: Observable<Diario[]>;
  constructor(private fire: AngularFireDatabase, private rota : Router) {
    this.listaDiario = this.fire.list<Diario>('diario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() { }


  clicarGeral() {
    this.rota.navigate(['relatorio']) ;
  }

}
