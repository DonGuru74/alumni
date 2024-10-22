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
        title: 'Alumnus 1',
        description: 'Alumnus 1 went on to achieve great success in the field of technology, working for leading companies and founding a successful startup.',
        image: 'assets/images/alumnus1.jpg'  // Ensure this path matches your assets folder
      },
      { 
        title: 'Alumnus 2',
        description: 'Alumnus 2 became a renowned researcher in the field of biomedical science, contributing to groundbreaking research and innovations.',
        image: 'assets/images/alumnus2.jpg'
      },
      { 
        title: 'Alumnus 3',
        description: 'Alumnus 3 made a significant impact in the non-profit sector, leading global initiatives to promote education and sustainability.',
        image: 'assets/images/alumnus3.jpg'
      }
    ];
  }
}
