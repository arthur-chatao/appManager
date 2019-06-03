import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponenteCadProj } from './projeto/telaCadProj/component.cadProj';
import { ComponenteCadUser } from './usuario/telaCadUser/component.cadUser';
import { ComponenteConfirmar } from './diario/telaConfirm/component.confirm';
import { ComponenteDiario } from './diario/telaDiario/component.diario';
import { ComponenteLogin } from './usuario/telaLogin/component.telaLogin';
import { ComponenteProjUser } from './projeto/telaProjUser/component.projUser';
import { ComponenteCadConfirm } from './usuario/telaCadConfir/component.cadConfirm';
import { ComponenteVisual } from './diario/telaVisual/component.visual';









@NgModule({
  declarations: [AppComponent, ComponenteLogin, ComponenteCadProj, ComponenteCadUser, ComponenteConfirmar, ComponenteDiario,
    ComponenteProjUser, ComponenteCadConfirm, ComponenteVisual],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
