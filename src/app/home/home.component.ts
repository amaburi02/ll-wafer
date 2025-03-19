import { Component } from '@angular/core';
import { SearchComponent } from '../components/search/search.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
