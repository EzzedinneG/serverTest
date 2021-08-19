import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUpdateComponent } from './form-update/form-update.component';

const routes: Routes = [
  {path:'',component:FormUpdateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
