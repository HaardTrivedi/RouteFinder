import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteFinderComponent } from './route-finder/route-finder.component';


const routes: Routes = [{path: '', component: RouteFinderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
