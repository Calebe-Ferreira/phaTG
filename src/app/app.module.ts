import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

//import { GeoService } from './geo.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChamadoService } from './shared/chamado.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
providers: [ChamadoService /*GeoService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
