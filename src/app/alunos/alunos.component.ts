import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalAlunoComponent } from '../modal-aluno/modal-aluno.component';
import { AlunoService } from '../aluno.service';

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

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'nascimento', 'filiacao', 'residencia'];
  dataSource = [];

  constructor(public dialog: MatDialog, private router: Router, private alunoService: AlunoService) {
    this.alunoService.pegaAlunos().subscribe((alunosDjango)=>{
      this.dataSource = alunosDjango;
    })
  }

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
