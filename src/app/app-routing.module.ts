import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { FilmsGuard } from './guards/films.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'peliculas', 
    canActivate:[FilmsGuard],
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
