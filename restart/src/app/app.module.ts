import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { RestartModule } from './modules/restart/restart.module';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
