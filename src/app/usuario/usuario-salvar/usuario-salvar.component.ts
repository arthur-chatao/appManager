import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/entidade/pessoa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/app/curso/entidade/curso';


@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
})
export class UsuarioSalvarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  pessoa : Pessoa = new Pessoa();
  listaCurso: Observable<Curso[]>;

  constructor(private afAuth: AngularFireAuth, private banco: AngularFireDatabase, private rota: Router, ) {
		this.listaCurso = this.banco.list<Curso>('curso').snapshotChanges().pipe(
		map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
);
	  }

  ngOnInit() { }

  salvar() {
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    this.afAuth.auth.createUserWithEmailAndPassword(this.pessoa.email, this.pessoa.senha);
    this.rota.navigate(['cadProj']);
  }
  
  curso(){
	  this.rota.navigate(['curso']);
  }

}
