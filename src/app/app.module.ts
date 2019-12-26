import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeInfoComponent } from './components/personajes/personaje-info/personaje-info.component';
import { OrganizacionInfoComponent } from './components/organizaciones/organizacion-info/organizacion-info.component';
import { VolverInfoComponent } from './shared/volver-info/volver-info.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonajeDataComponent } from './components/personajes/personaje-data/personaje-data.component';
import { BotonesDataComponent } from './shared/botones-data/botones-data.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { OrganizacionDataComponent } from './components/organizaciones/organizacion-data/organizacion-data.component';

const appRoutes: Routes = [
  { path: 'data/personajes/:id', component: PersonajeDataComponent },
  { path: 'data/personajes', component: PersonajeDataComponent },
  { path: 'info/personajes/:id', component: PersonajeInfoComponent },
  { path: 'info/organizaciones/:id', component: OrganizacionInfoComponent },
  { path: 'data/organizaciones', component: OrganizacionDataComponent },
  { path: 'data/organizaciones/:id', component: OrganizacionDataComponent },
  { path: '', component: ListadoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    TablaComponent,
    PersonajeInfoComponent,
    OrganizacionInfoComponent,
    VolverInfoComponent,
    PersonajeDataComponent,
    BotonesDataComponent,
    CabeceraComponent,
    OrganizacionDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
