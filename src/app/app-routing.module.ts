import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AluDirectoryComponent } from './alu-directory/alu-directory.component';
import { CareerComponent } from './career/career.component';
import { NewsComponent } from './news/news.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'alu-directory',
    component: AluDirectoryComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'events-details',
    component: EventsDetailsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'card/:id',
    component: CardComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
