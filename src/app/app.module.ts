import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { FiltroCartasPipe } from './pipes/filtro-cartas.pipe';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Route[] =[
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'deckbuilder', component: DeckBuilderComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DeckBuilderComponent,
    FiltroCartasPipe,
    NavComponent,
    InicioComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPopoverModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking', onSameUrlNavigation: 'reload' }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
