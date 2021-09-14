import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { MainComponent } from './components/main/main.component';
import { FileComponent } from './components/file/file.component';
import { FilmsComponent } from './components/films/films.component';
import { StartsComponent } from './components/starts/starts.component';



@NgModule({
  declarations: [
    MainComponent,
    FilmsComponent,
    FileComponent,
    StartsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class FilmsModule { }