import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-contact',
  imports: [MatExpansionModule, MatDividerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
