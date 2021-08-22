import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalAlunoComponent } from '../modal-aluno/modal-aluno.component';

export interface Aluno {
  id: number;
  nome: string;
  nascimento: Date;
  filiacao: string;
  residencia: string;
  notas: Nota[];

}
export interface Nota {
  id: number;
  materia: string;
  nota: number
}

const ELEMENT_DATA: Aluno[] = [
  { id: 1, nome: "Pâmela", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] },
  { id: 2, nome: "Alexandre", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] },
  { id: 3, nome: "Yasmim", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] },
  { id: 4, nome: "Gabriel", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] },
  { id: 4, nome: "Juninho", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] },
  { id: 5, nome: "Neuza", nascimento: new Date("2000-09-26"), filiacao: "Maria Neuza, Sebastiao de Araujo", residencia: "Rua tereza", notas: [] }
];

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'nascimento', 'filiacao', 'residencia'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private router: Router) { }

  abrirModal() {
    this.dialog.open(ModalAlunoComponent, {
      width: "400px"
    });
  }

  navegaDetalhe(id: number) {
    this.router.navigate(["detalhe", id ])
  }

  ngOnInit(): void {
  }

}
