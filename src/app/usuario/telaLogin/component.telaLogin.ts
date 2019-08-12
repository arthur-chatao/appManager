import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/entidade/pessoa';


@Component({
  selector: 'component.telaLogin',
  templateUrl: 'component.telaLogin.html'
})



export class ComponenteLogin {
  usuario: Pessoa = new Pessoa();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }



  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['projL']); }
    ).catch((erro) => console.log(alert(erro)));
  }


}
