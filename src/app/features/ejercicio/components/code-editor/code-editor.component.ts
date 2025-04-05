import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent {
  @Input() initialCode: string = '';
  @Output() codeChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.codeChange.emit(value);
  }
}