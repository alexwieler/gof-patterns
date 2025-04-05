import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PatronesService } from '../../../../core/services/patrones.service';
import { PatronGoF } from '../../../../core/models/patron.model';
import { SafeUrlPipe } from '../../../../shared/pipes/safe-url.pipe';

@Component({
  standalone: true,
  selector: 'app-detalle-patron',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './detalle-patron.component.html',
  styleUrls: ['./detalle-patron.component.scss']
})
export class DetallePatronComponent implements OnInit {
  patron!: PatronGoF;

  constructor(
    private route: ActivatedRoute,
    private patronesService: PatronesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.patronesService.getPatrones().subscribe(patrones => {
        const patronEncontrado = patrones.find(p => p.id === id);
        if (patronEncontrado) {
          this.patron = patronEncontrado;
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}