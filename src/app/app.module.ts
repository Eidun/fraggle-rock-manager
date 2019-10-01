import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ListadoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
