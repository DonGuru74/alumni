import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { CardComponent } from './card/card.component';
import { AluDirectoryComponent } from './alu-directory/alu-directory.component';
import { CareerComponent } from './career/career.component';
import { StoriesComponent } from './stories/stories.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { EventReaderComponent } from './event-reader/event-reader.component';
import { HomeComponent } from './home/home.component';
>>>>>>> 59fab482c58d5463cca3117fc5e82de0ab34ba7d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    NewsComponent,
    EventsComponent,
    CardComponent,
    AluDirectoryComponent,
    CareerComponent,
    StoriesComponent,
    EventReaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
