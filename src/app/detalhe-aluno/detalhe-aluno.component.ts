import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from '../alunos/alunos.component';

const ELEMENT_DATA: Nota[] = [
  { id: 1, materia: "Português", nota: 80 },
  { id: 2, materia: "Matemática", nota: 90 },
  { id: 3, materia: "Física", nota: 100 },
];

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})

export class DetalheAlunoComponent implements OnInit {

  displayedColumns: string[] = ['materia', 'nota'];

  dataSource = ELEMENT_DATA;

  type = 'bar';
  
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public get melhorNota(): number {
    let melhor = 0;
    ELEMENT_DATA.forEach(nota => {
      if (nota.nota > melhor) {
        melhor = nota.nota
      }
    });
    return melhor;
  }

  public get piorNota(): number {
    let pior = 100;
    ELEMENT_DATA.forEach(nota => {
      if (nota.nota < pior) {
        pior = nota.nota
      }
    });
    return pior;
  }

  public get media(): number {
    let total = 0;
    let quantidade = 0;
    ELEMENT_DATA.forEach((nota) => {
      total += nota.nota;
      quantidade++;
    });
    let resultado = total / quantidade;
    return resultado;
  }
}
