import { Component, OnInit } from '@angular/core';
import { PatronesService } from '../../../../core/services/patrones.service';
import { PatronGoF } from '../../../../core/models/patron.model';
import { PatronCardComponent } from '../../../../shared/components/patron-card/patron-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-patrones',
  standalone: true,
  imports: [PatronCardComponent, CommonModule],
  templateUrl: './lista-patrones.component.html',
  styleUrls: ['./lista-patrones.component.scss']
})

export class ListaPatronesComponent implements OnInit {
  patrones: PatronGoF[] = [];

  constructor(private patronesService: PatronesService) {}

  ngOnInit(): void {
    this.patronesService.getPatrones().subscribe({
      next: (data) => this.patrones = data,
      error: (err) => console.error('Error al cargar patrones:', err)
    });
  }
}