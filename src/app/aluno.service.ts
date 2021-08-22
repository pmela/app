import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlunoService {
  constructor(private http: HttpClient) {}

  pegaAlunos(){
      return this.http.get<any>('http://127.0.0.1:8000/alunos/');
  }
}