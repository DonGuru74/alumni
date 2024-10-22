import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',  // The selector used in HTML to render this component
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  jobs: any[] = [];  // Array to hold job listings
  searchTerm: string = '';  // Search term for filtering jobs

  constructor() { }

  ngOnInit(): void {
    this.jobs = [
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
      }
    ];  // Example static job listings
  }

  filterJobs(): void {
    // Add filter logic based on the search term (you can modify it based on your needs)
    this.jobs = this.jobs.filter(job => 
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
