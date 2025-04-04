import { Component, OnInit } from '@angular/core';
import { PatronesService } from '../../../../core/services/patrones.service';
import { PatronGoF } from '../../../../core/models/patron.model';

@Component({
  selector: 'app-lista-patrones',
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