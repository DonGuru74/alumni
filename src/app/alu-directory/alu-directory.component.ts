import { Component } from '@angular/core';
import { IAlumni } from '../shared/alumni.model';
import { alumni } from '../shared/alumni';


@Component({
  selector: 'app-alu-directory',
  templateUrl: './alu-directory.component.html',
  styleUrl: './alu-directory.component.css'
})
export class AluDirectoryComponent {
  alumni : IAlumni [] = alumni
  // prodCart: productsModel []
  // article: number = 0;

  // constructor ( 
  //   // private router : ActivatedRoute, 
  //   private cartSer : CartService
  // ){
  //   let id =  parseInt('id');
    
  //   // this.prodCart = products[id]
 
  // }
}
