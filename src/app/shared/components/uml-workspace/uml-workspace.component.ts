import { AfterViewInit, Component, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as joint from 'jointjs';

@Component({
  standalone: true,
  selector: 'app-uml-workspace',
  templateUrl: './uml-workspace.component.html',
  styleUrls: ['./uml-workspace.component.scss']
})
export class UmlWorkspaceComponent implements AfterViewInit, OnChanges {
  @Input() code!: string;
  @ViewChild('paperContainer', { static: true }) paperContainer!: ElementRef;

  private graph = new joint.dia.Graph();
  private paper!: joint.dia.Paper;

  ngAfterViewInit(): void {
    this.paper = new joint.dia.Paper({
      el: this.paperContainer.nativeElement,
      model: this.graph,
      width: '100%',
      height: 600,
      gridSize: 10,
      drawGrid: true,
      background: { color: '#f4f4f4' }
    });

    this.renderClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && this.paper) {
      this.renderClasses();
    }
  }

  private renderClasses(): void {
    console.log('Rendering UML classes...');
    console.log('Code input:', this.code);
    this.graph.clear();

    const classRegex = /class\s+(\w+)/g;
    let match;
    let x = 50;
    const y = 70;

    while ((match = classRegex.exec(this.code)) !== null) {
      const className = match[1];
      console.log('Found class:', className);
      const rect = new joint.shapes.standard.Rectangle();
      rect.position(x, y);
      rect.resize(120, 50);
      rect.attr({
        body: {
          fill: '#ffffff',
          stroke: '#000000'
        },
        label: {
          text: className,
          fill: '#000000'
        }
      });
      rect.addTo(this.graph);
      x += 150;
    }
  }
}