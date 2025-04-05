import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PatronesService } from '../../../../core/services/patrones.service';
import { PatronGoF } from '../../../../core/models/patron.model';
import { PatronCardComponent } from '../../../../shared/components/patron-card/patron-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-patrones',
  standalone: true,
  imports: [PatronCardComponent, CommonModule, FormsModule],
  templateUrl: './lista-patrones.component.html',
  styleUrls: ['./lista-patrones.component.scss']
})

export class ListaPatronesComponent implements OnInit, OnChanges {
  patrones: PatronGoF[] = [];
  filtroTexto: string = '';
  filtroCategoria: string = '';
  patronesFiltrados: PatronGoF[] = [];
  @Input() tipoSeleccionado: string = '';

  constructor(private patronesService: PatronesService) {}

  ngOnInit(): void {
    this.patronesService.getPatrones().subscribe({
      next: (data) => {
        this.patrones = data;
        this.aplicarFiltros();
      },
      error: (err) => console.error('Error al cargar patrones:', err)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tipoSeleccionado']) {
      this.aplicarFiltros();
    }
  }

  aplicarFiltros(): void {
    const texto = this.filtroTexto.toLowerCase();
    const categoria = (this.tipoSeleccionado || this.filtroCategoria).toLowerCase();

    this.patronesFiltrados = this.patrones.filter(p =>
      (!this.filtroTexto || p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto)) &&
      (!categoria || p.categoria.toLowerCase().includes(categoria))
    );
  }

  onTextoChanged(): void {
    this.aplicarFiltros();
  }

  onCategoriaChanged(): void {
    this.aplicarFiltros();
  }
}