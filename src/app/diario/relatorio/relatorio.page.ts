import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Diario } from '../entidade/diario';
import { map } from 'rxjs/operators'
import { Projeto } from 'src/app/projeto/entidade/projeto';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Router } from '@angular/router';




@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {
  email: string = "";
  mensagem: string = "";
  listaDiario: Observable<Diario[]>;
  listaProjetos: Observable<Projeto[]>;
  //private fire: AngularFireDatabase, private banco: AngularFireDatabase
  constructor(public emailComposer: EmailComposer, private fire: AngularFireDatabase, private rota: Router) {
    this.listaDiario = this.fire.list<Diario>('diario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

    this.listaProjetos = this.fire.list<Projeto>('projeto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );



  }



  ngOnInit() {
  }



  voltar(){
    this.rota.navigate(['diariol']) ;
  }

  enviar() {

    let email = {
      to: this.email,
      cc: '',
      bcc: [''],
      attachments: [
        ''
      ],
      subject: 'Cordova Icons',
      body: "Relatório de Projeto " + this.listaDiario + " .",
      isHtml: true,
    }

    // Send a text message using default options
    this.emailComposer.open(email);


  }









}
