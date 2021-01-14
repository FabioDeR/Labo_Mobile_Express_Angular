import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { IndexComponent } from './components/index/index.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "index", component: IndexComponent},
  {path: "connection", component: ConnectionComponent},
  {path: "register", component: RegisterComponent},
  {path: "message", component: MessageComponent},
  {path: "administration", component: AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
