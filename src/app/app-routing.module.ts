import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecibosComponent } from './components/recibos/recibos.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'recibos',component: RecibosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
