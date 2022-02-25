
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const restart = ()=> import('./modules/restart/restart.module').then(r=>r.RestartModule);

const routes: Routes = [
  {path:'', component:ShellComponent,
children:[
  {path:'restart', loadChildren:restart},
  {path:'', redirectTo:'restart', pathMatch:'full'}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
