import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRestartComponent } from './base-restart/base-restart.component';
import { RestartRoutingModule } from './restart-rounting.module';


@NgModule({
  declarations: [
    BaseRestartComponent
  ],
  imports: [
    CommonModule,
    RestartRoutingModule
  ]
})
export class RestartModule { }
