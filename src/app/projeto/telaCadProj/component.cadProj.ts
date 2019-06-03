import { Component } from '@angular/core';
import { Projeto } from '../entidade/projeto';

@Component({
  selector: 'component.cadProj',
  templateUrl: 'component.cadProj.html'
})

export class ComponenteCadProj {
  projeto : Projeto = new Projeto();


}
