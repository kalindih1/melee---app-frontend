import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KillPercentComponent } from './kill-percent/kill-percent.component';

const routes: Routes = [
  {path: 'characters', component: KillPercentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
