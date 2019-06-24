import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Projeto } from '../entidade/projeto';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-projeto-listar',
  templateUrl: './projeto-listar.component.html',
  styleUrls: ['./projeto-listar.component.scss'],
})
export class ProjetoListarComponent implements OnInit {

  listaProjetos: Observable<Projeto[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaProjetos = this.fire.list<Projeto>('projeto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() {}

}
