import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListaProductosComponent } from '../components/lista-productos/lista-productos.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { RegisterComponent } from '../components/register/register.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ConfirmarComponent } from '../components/confirmar-cuenta/confirmar-cuenta.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'productos', component: ListaProductosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'confirm', component: ConfirmarComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
