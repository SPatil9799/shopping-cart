import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent} from './components/registration/registration.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
const routes: Routes = [
  { path: '',redirectTo: '/shop',pathMatch: 'full'},
  { path: 'login',component:LoginComponent },
  { path: 'registration',component:RegistrationComponent},
  { path: 'shop',component:ShoppingCartComponent },
  { path: '**', component:PageNotFoundComponent},
  { path: 'About US' ,component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
