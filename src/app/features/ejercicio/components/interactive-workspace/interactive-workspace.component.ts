import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronGoF } from '../../../../core/models/patron.model';
import { InstructionPanelComponent } from '../instruction-panel/instruction-panel.component';
import { CodeEditorComponent } from '../code-editor/code-editor.component';
import { UmlWorkspaceComponent } from '../../../../shared/components/uml-workspace/uml-workspace.component';

@Component({
  selector: 'app-interactive-workspace',
  standalone: true,
  imports: [CommonModule, InstructionPanelComponent, CodeEditorComponent, UmlWorkspaceComponent],
  templateUrl: './interactive-workspace.component.html',
  styleUrls: ['./interactive-workspace.component.scss']
})
export class InteractiveWorkspaceComponent {
  @Input() patron!: PatronGoF;

  code: string = '';

  onCodeChange(newCode: string) {
    this.code = newCode;
  }
}