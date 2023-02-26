import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular/popular.component';
import { NewComponent } from './new/new.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { TopicsComponent } from './topics/topics.component';
import { SuscribeComponent } from './suscribe/suscribe.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PopularComponent,
    NewComponent,
    ReadingListComponent,
    TopicsComponent,
    SuscribeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
