import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatronGoF } from '../models/patron.model';

@Injectable({ providedIn: 'root' })
export class PatronesService {
  private readonly jsonUrl = 'assets/data/patterns.json';

  constructor(private http: HttpClient) {}

  getPatrones(): Observable<PatronGoF[]> {
    return this.http.get<PatronGoF[]>(this.jsonUrl);
  }
}