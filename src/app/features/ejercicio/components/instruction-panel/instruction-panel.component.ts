import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instruction-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instruction-panel.component.html',
  styleUrls: ['./instruction-panel.component.scss']
})
export class InstructionPanelComponent {
  @Input() enunciado: string = '';
}