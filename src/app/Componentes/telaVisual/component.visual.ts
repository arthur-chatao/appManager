import { Component } from '@angular/core';

@Component({
  selector: 'component.visual',
  templateUrl: 'component.visual.html'
})

export class ComponenteVisual {

  clicarSingle(): void {
    alert("O download foi Iniciado");

  }

  clicarGeral(): void {
    alert("O download do Relatorio final foi Iniciado");

  }

}
