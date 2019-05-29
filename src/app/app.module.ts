import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponenteLogin } from './Componentes/telaLogin/component.telaLogin';
import { ComponenteCadProj } from './Componentes/telaCadProj/component.cadProj';
import { ComponenteCadUser } from './Componentes/telaCadUser/component.cadUser';
import { ComponenteConfirmar } from './Componentes/telaConfirm/component.confirm';
import { ComponenteDiario } from './Componentes/telaDiario/component.diario';

import { ComponenteManUser } from './Componentes/telaManUser/component.manUser';
import { ComponenteProjUser } from './Componentes/telaProjUser/component.projUser';





@NgModule({
  declarations: [AppComponent, ComponenteLogin, ComponenteCadProj,  ComponenteCadUser, ComponenteConfirmar, ComponenteDiario, 
	ComponenteManUser, ComponenteProjUser ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
