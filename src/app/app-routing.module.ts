import { TriangleChallengeComponent } from './triangle-challenge/triangle-challenge.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',
  component: TriangleChallengeComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
