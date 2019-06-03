import { Component } from '@angular/core';
import { Diario } from '../entidade/diario';


@Component({
  selector: 'component.diario',
  templateUrl: 'component.diario.html'
})

export class ComponenteDiario {
diario : Diario = new Diario();
}
