import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  newsList = [
    {
      title: 'Alumni Event: Success Stories',
      excerpt:
        'Join us for an amazing alumni event where success stories will be shared...',
      date: 'October 20, 2024',
      link: '#',
    },
    {
      title: 'Career Opportunities for Alumni',
      excerpt: 'New job openings and career opportunities for our alumni...',
      date: 'November 1, 2024',
      link: '#',
    },
    {
      title: 'New Events Coming Up During The Next Weeks',
      excerpt:
        'Stay tuned for exciting events coming up in the next few weeks...',
      date: 'December 5, 2024',
      link: '#',
    },
  ];
}
