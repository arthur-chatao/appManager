import { Component, OnInit } from '@angular/core';
import { Projeto } from '../entidade/projeto';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-salvar',
  templateUrl: './projeto-salvar.component.html',
  styleUrls: ['./projeto-salvar.component.scss'],
})
export class ProjetoSalvarComponent implements OnInit {
  projeto: Projeto = new Projeto();
  constructor(private banco: AngularFireDatabase, private modal: ModalController,  private router: Router) { }



  ngOnInit() { }

  projSalvar() {
	 if(this.projeto.key == null){
		this.banco.list('projeto').push(this.projeto);
		this.projeto = new Projeto();
		this.router.navigate(['projL']) ;
	}else{
		this.banco.object('projeto/'+this.projeto.key).update(this.projeto);
		this.modal.dismiss();
		this.router.navigate(['projL']) ;
	} 
    
  }

}
