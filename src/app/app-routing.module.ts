import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageErrorComponent } from './page-error/page-error.component';



const routes: Routes = [
  { path:'' , pathMatch:'full' , redirectTo:'/first'},
  { path:'first' , component: FirstComponent},
  { path:'second' , component: SecondComponent},
  { path:'**' , component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [FirstComponent , SecondComponent , PageErrorComponent]
