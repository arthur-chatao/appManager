import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-usuario-salvar',
  templateUrl: './usuario-salvar.component.html',
  styleUrls: ['./usuario-salvar.component.scss'],
})
export class UsuarioSalvarComponent implements OnInit {
  usuario: Usuario = new Usuario();	
	
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
  
  salvar(){
    this.banco.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    alert("Salvo");
  }

}
