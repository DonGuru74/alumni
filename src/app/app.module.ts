import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { EventReaderComponent } from './event-reader/event-reader.component';
import { HomeComponent } from './home/home.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

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
    HomeComponent,
    EventsDetailsComponent,
    NewsDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
