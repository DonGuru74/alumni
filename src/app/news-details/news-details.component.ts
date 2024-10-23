import { Component } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent {
  newsList = [
    {
      title: 'Alumni Event: Success Stories',
      date: 'October 20, 2024',
      fullContent: `
        The Alumni Event: Success Stories is a grand gathering of our former students who have 
        achieved remarkable success in their respective fields. At this event, we will hear from 
        some of the most inspiring alumni who have overcome challenges to reach the top of their 
        industries. The event will feature keynote speakers, panel discussions, and networking 
        opportunities.
      `,
    },
    {
      title: 'Career Opportunities for Alumni',
      date: 'November 1, 2024',
      fullContent: `
        Our Alumni Career Opportunities fair is back! Partnering with over 50 companies from 
        different sectors looking to hire talented individuals like you. Whether you are seeking 
        a new job or exploring options to advance in your career, this event is for you.
      `,
    },
    {
      title: 'New Events Coming Up',
      date: 'December 5, 2024',
      fullContent: `
        We are excited to announce a lineup of exciting events for our alumni community. These 
        events aim to foster connections, promote lifelong learning, and provide a platform for 
        professional growth.
      `,
    },
  ];
}
