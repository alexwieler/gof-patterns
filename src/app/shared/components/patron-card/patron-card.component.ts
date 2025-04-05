import { Component, Input } from '@angular/core';
import { PatronGoF } from '../../../core/models/patron.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-patron-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './patron-card.component.html',
  styleUrls: ['./patron-card.component.scss']
})
export class PatronCardComponent {
  @Input() patron!: PatronGoF;
}