import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Diario } from '../entidade/diario';
import { map } from 'rxjs/operators'
import { Projeto } from 'src/app/projeto/entidade/projeto';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  listaDiario: Observable<Diario[]>;
  listaProjetos: Observable<Projeto[]>;
//private fire: AngularFireDatabase, private banco: AngularFireDatabase
  constructor(public emailComposer: EmailComposer) {
  /*  this.listaDiario = this.fire.list<Diario>('diario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

    this.listaProjetos = this.banco.list<Projeto>('projeto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );*/



  }



  ngOnInit() {
  }





enviar(){

  let email = {
    to: 'sabatinoarthur@gmail.com',
    cc: '',
    bcc: [''],
    attachments: [
      ''
    ],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true,
    app: 'gmail',
  }

  // Send a text message using default options
  this.emailComposer.open(email);


}









}
