
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriangleChallengeComponent } from './components/triangle-challenge/triangle-challenge.component';

const routes: Routes = [ {
  path: '',
  component: TriangleChallengeComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
