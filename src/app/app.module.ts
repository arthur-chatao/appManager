import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { EmailComposer } from '@ionic-native/email-composer/ngx';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire"
import { AngularFireDatabaseModule } from "@angular/fire/database"


import { ProjetoSalvarComponent } from './projeto/projeto-salvar/projeto-salvar.component';
import { ComponenteConfirmar } from './diario/telaConfirm/component.confirm';
import { DiarioSalvarComponent } from './diario/diario-salvar/diario-salvar.component';
import { ComponenteLogin } from './usuario/telaLogin/component.telaLogin';

import { ComponenteCadConfirm } from './usuario/telaCadConfir/component.cadConfirm';

import { UsuarioSalvarComponent } from './usuario/usuario-salvar/usuario-salvar.component';
import { ProjetoListarComponent } from './projeto/projeto-listar/projeto-listar.component';
import { DiarioListarComponent } from './diario/diario-listar/diario-listar.component';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [AppComponent, ComponenteLogin, ProjetoSalvarComponent, UsuarioSalvarComponent, ComponenteConfirmar, DiarioSalvarComponent,
    ComponenteCadConfirm, ProjetoListarComponent, DiarioListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyBzxbzeMlriRJceekUkCIge7mKkGDvVBkE",
    authDomain: "appmanager-93db5.firebaseapp.com",
    databaseURL: "https://appmanager-93db5.firebaseio.com",
    projectId: "appmanager-93db5",
    storageBucket: "appmanager-93db5.appspot.com",
    messagingSenderId: "468769616416",
    appId: "1:468769616416:web:0abcd171e5e39db7"
  }), AngularFireDatabaseModule,],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    AngularFireAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
