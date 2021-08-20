import { Component, OnInit } from '@angular/core';

export interface Aluno {
  nome: string;
  nascimento: Date;
  filiacao: string;
  residencia: string;
  notas: Nota[];

}
export interface Nota {
  materia: string;
  nota: number
}

const ELEMENT_DATA: Aluno[] = [
  {nome:"Pâmela", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []},
  {nome:"Alexandre", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []},
  {nome:"Yasmim", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []},
  {nome:"Gabriel", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []},
  {nome:"Juninho", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []},
  {nome:"Neuza", nascimento: new Date("2000-09-26"), filiacao:"Maria Neuza, Sebastiao de Araujo", residencia:"Rua tereza",notas: []}
];

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'nascimento', 'filiacao', 'residencia'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
