import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BananaComponent } from './banana/banana.component';

export const routes: Routes = [{
  path: '',
  component: BananaComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


