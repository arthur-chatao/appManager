import { Component } from '@angular/core';
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'component.cadUser',
  templateUrl: 'component.cadUser.html'
})

export class ComponenteCadUser {
 usuario: Usuario = new Usuario();

}
