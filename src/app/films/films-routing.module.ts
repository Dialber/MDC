import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsGuard } from '../guards/films.guard';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { 
    canActivate:[FilmsGuard],
    path: '', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FilmsRoutingModule { }
