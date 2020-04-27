import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
	{ path: 'cliente', component: ClientFormComponent },
	{ path: 'usuario', component: UserFormComponent },
	{ path: 'menu', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
