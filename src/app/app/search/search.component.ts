import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
