import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Projeto } from '../entidade/projeto';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-listar',
  templateUrl: './projeto-listar.component.html',
  styleUrls: ['./projeto-listar.component.scss'],
})
export class ProjetoListarComponent implements OnInit {

  listaProjetos: Observable<Projeto[]>;




  constructor(private fire: AngularFireDatabase,private afAuth: AngularFireAuth, private router: Router ) {
    this.listaProjetos = this.fire.list<Projeto>('projeto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() { }

  logout() {

    this.afAuth.auth.signOut();

    this.router.navigate(['home']);
  }

  excluir(chave) {

      this.fire.list('projeto').remove(chave);
      alert("Excluso Com sucesso");

  }



}
