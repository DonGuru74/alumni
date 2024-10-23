import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stories = [
      { 
        title: 'Ama Mensah',
        description: 'Alumnus 1 went on to achieve great success in the field of technology, working for leading companies and founding a successful startup.',
        image: '/img/woman2.jpg'  
      },
      { 
        title: 'Samantha Greens',
        description: 'Alumnus 2 became a renowned researcher in the field of biomedical science, contributing to groundbreaking research and innovations.',
        image: '/img/woman5.jpg'
      },
      { 
        title: 'Priscille Monet',
        description: 'Alumnus 3 made a significant impact in the non-profit sector, leading global initiatives to promote education and sustainability.',
        image: '/img/woman3.jpg'
      }
    ];
  }
}
