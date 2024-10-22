import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alumni } from '../shared/alumni';
import {IAlumni} from '../shared/alumni.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  alumniDet : IAlumni;

  constructor (
    private route : ActivatedRoute) 
    
  {
    let id =  parseInt(this.route.snapshot.params['id']);
    
    this.alumniDet = alumni[id]
  }
 
}


