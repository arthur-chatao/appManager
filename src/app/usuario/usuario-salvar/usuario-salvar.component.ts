import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/entidade/pessoa';

@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
})
export class UsuarioSalvarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  pessoa : Pessoa = new Pessoa();

  constructor(private afAuth: AngularFireAuth, private banco: AngularFireDatabase, private rota: Router, ) { }

  ngOnInit() { }

  salvar() {
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    this.afAuth.auth.createUserWithEmailAndPassword(this.pessoa.email, this.pessoa.senha);
    alert("Salvo");
    this.rota.navigate(['cadProj'])
  }

}
