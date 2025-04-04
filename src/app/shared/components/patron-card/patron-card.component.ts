import { Component, Input } from '@angular/core';
import { PatronGoF } from '../../../core/models/patron.model';

@Component({
  selector: 'app-patron-card',
  templateUrl: './patron-card.component.html',
  styleUrls: ['./patron-card.component.scss']
})
export class PatronCardComponent {
  @Input() patron!: PatronGoF;
}