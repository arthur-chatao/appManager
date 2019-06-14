import { Component, OnInit } from '@angular/core';
import { Diario } from '../entidade/diario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-diario-salvar',
  templateUrl: './diario-salvar.component.html',
  styleUrls: ['./diario-salvar.component.scss'],
})
export class DiarioSalvarComponent implements OnInit {
  diario : Diario = new Diario();
  
  constructor(private banco: AngularFireDatabase) { }
  
  ngOnInit() {}
  
  diarioSalvar(){
    this.banco.list('diario').push(this.diario);
    this.diario = new Diario();
    alert("Diario Salvo");
  }

}
