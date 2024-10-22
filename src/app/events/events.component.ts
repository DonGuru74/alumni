import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  events = [
    {
      title: 'Alumni Meetup',
      date: new Date('2024-11-01'),
      description: 'Join us for our monthly alumni meetup.',
    },
    {
      title: 'Tech Conference',
      date: new Date('2024-12-15'),
      description: 'Attend a conference on the latest in tech.',
    },
    // i'll add more events
  ];

  constructor() {}
}
