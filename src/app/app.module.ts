import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeInfoComponent } from './components/personajes/personaje-info/personaje-info.component';
import { OrganizacionInfoComponent } from './components/organizaciones/organizacion-info/organizacion-info.component';
import { VolverInfoComponent } from './components/volver-info/volver-info.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'info/personajes/:id', component: PersonajeInfoComponent },
  { path: 'info/organizaciones/:id', component: OrganizacionInfoComponent },
  { path: '', component: ListadoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    TablaComponent,
    PersonajeInfoComponent,
    OrganizacionInfoComponent,
    VolverInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
