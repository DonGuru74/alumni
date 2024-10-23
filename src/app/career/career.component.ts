import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  // Array to hold all job listings
  allJobs: any[] = [];
  // Array to hold filtered job listings
  filteredJobs: any[] = [];
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    this.allJobs = [
      {
        title: 'Software Engineer',
        description: 'We are looking for a Software Engineer with 3+ years of experience in web development.',
        location: 'San Francisco, CA'
      },
      {
        title: 'Data Analyst',
        description: 'Join our team as a Data Analyst to help us make data-driven decisions.',
        location: 'New York, NY'
      },
      {
        title: 'Product Manager',
        description: 'Seeking an experienced Product Manager to lead cross-functional teams.',
        location: 'Remote'
      },
      {
        title: 'UI/UX Designer',
        description: 'We need a creative designer to develop beautiful and user-friendly interfaces.',
        location: 'Austin, TX'
      },
      {
        title: 'DevOps Engineer',
        description: 'Looking for a DevOps Engineer with experience in cloud infrastructure and automation.',
        location: 'Seattle, WA'
      },
      {
        title: 'Marketing Specialist',
        description: 'We need a Marketing Specialist to execute digital campaigns and grow brand awareness.',
        location: 'Boston, MA'
      }
    ];

    // Initially, all jobs are displayed
    this.filteredJobs = this.allJobs;
  }

  // Function to filter jobs based on the search term
  filterJobs(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredJobs = this.allJobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.description.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    );
  }
}
