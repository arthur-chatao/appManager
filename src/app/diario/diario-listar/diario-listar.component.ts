import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Diario } from '../entidade/diario';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-diario-listar',
  templateUrl: './diario-listar.component.html',
  styleUrls: ['./diario-listar.component.scss'],
})
export class DiarioListarComponent implements OnInit {

  listaDiario: Observable<Diario[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaDiario = this.fire.list<Diario>('diario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() { }

  clicarSingle() {
    alert("Baixando Diario do Dia!!");
  }

  clicarGeral() {
    alert("Gerando, e baixando o Diario Final!!");
  }

}
