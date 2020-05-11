import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientFormComponent } from './client-form/client-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
	{ path: 'cliente/cadastro', component: ClientFormComponent },
	{ path: 'usuario/cadastro', component: UserFormComponent },
	{ path: 'usuario/lista', component: UserListComponent },
	{ path: 'cliente/lista', component: ClientListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

