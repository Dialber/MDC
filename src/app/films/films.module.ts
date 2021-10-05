import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { MainComponent } from './components/main/main.component';
import { FileComponent } from './components/file/file.component';
import { FilmsComponent } from './components/films/films.component';
import { StartsComponent } from './components/starts/starts.component';
import { SharedModule } from 'app/shared/shared.module';
import { BarchartComponent } from './components/barchart/barchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    MainComponent,
    FilmsComponent,
    FileComponent,
    StartsComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    NgxChartsModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class FilmsModule { }
