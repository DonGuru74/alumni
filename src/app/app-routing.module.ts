import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AluDirectoryComponent } from './alu-directory/alu-directory.component';
import { CareerComponent } from './career/career.component';
import { NewsComponent } from './news/news.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';

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
    path: 'events',
    component: EventsComponent
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
