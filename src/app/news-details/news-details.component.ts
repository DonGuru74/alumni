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
        
        Speakers include:
        - John Doe, CEO of TechCorp, who will share his journey from student to leading one of 
        the most innovative companies in the tech industry.
        - Jane Smith, founder of EcoSolutions, will discuss how her passion for sustainability 
        led her to create a successful startup focused on green energy.

        Attendees will have the opportunity to:
        - Participate in Q&A sessions with the speakers.
        - Join breakout sessions designed to foster discussion and collaboration.
        - Engage in networking opportunities with alumni from various industries.

        We encourage all alumni to attend, celebrate success, and continue to inspire one another!
      `,
    },
    {
      title: 'Career Opportunities for Alumni',
      date: 'November 1, 2024',
      fullContent: `
        Our Alumni Career Opportunities fair is back! Partnering with over 50 companies from 
        different sectors looking to hire talented individuals like you. Whether you are seeking 
        a new job or exploring options to advance in your career, this event is for you.
        
        The companies participating include major firms from tech, finance, healthcare, and more:
        - TechCorp, offering roles in software development, data analysis, and cybersecurity.
        - GreenTech Solutions, looking for sustainability consultants and project managers.
        - Global Finance Group, with opportunities in finance, investment, and risk management.

        What to expect:
        - Resume review sessions to help you polish your CV.
        - On-site interviews with recruiters looking to fill positions immediately.
        - Workshops on networking, personal branding, and job hunting strategies.

        This is a fantastic opportunity for alumni to connect directly with potential employers and 
        explore new career paths. Don’t forget to bring your updated resume and prepare to make an 
        impression!
      `,
    },
    {
      title: 'New Events Coming Up',
      date: 'December 5, 2024',
      fullContent: `
        We are excited to announce a lineup of exciting events for our alumni community. These 
        events aim to foster connections, promote lifelong learning, and provide a platform for 
        professional growth.

        Here are a few highlights:
        - Alumni Leadership Summit (January 15, 2025): A full-day event featuring leaders in 
        business, technology, and education who will share their insights on leadership, innovation, 
        and the future of work.
        - Mentorship Matchup (February 10, 2025): A unique opportunity to be matched with 
        experienced mentors in your field, offering guidance and support as you navigate your 
        career journey.
        - Alumni Sports Day (March 20, 2025): Join fellow alumni for a day of friendly 
        competition in various sports and activities. This event is perfect for networking in a 
        relaxed and fun environment.

        We are committed to creating an inclusive community where alumni can continue to learn, 
        grow, and give back. Stay tuned for more details on these upcoming events!
      `,
    },
  ];
}
