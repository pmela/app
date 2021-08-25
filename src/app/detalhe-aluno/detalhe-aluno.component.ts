import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Nota } from '../alunos/alunos.component';



@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css']
})

export class DetalheAlunoComponent implements OnInit {

  displayedColumns: string[] = ['materia', 'nota'];
  notas: Nota[] = [];
  dataSource = [];

  type = 'bar';

  data = {};
  
  options = {
    scales: {
      y: {
        beginAtZero: false
      },
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor(private router: Router, private route: ActivatedRoute, private alunoService: AlunoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.pegaAluno(id).subscribe((aluno) => {
      this.notas = aluno.notas;
      this.dataSource = aluno.notas;
      this.data = {
        labels: this.notas.map(nota => nota.materia),
        datasets: [{
          label: 'Notas',
          data: this.notas.map(nota => nota.nota),
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
    })
  }

  ngOnInit(): void {

  }

  public get melhorNota(): number {
    let melhor = 0;
    this.notas.forEach(nota => {
      if (nota.nota > melhor) {
        melhor = nota.nota
      }
    });
    return melhor;
  }

  public get piorNota(): number {
    let pior = 100;
    this.notas.forEach(nota => {
      if (nota.nota < pior) {
        pior = nota.nota
      }
    });
    return pior;
  }

  public get media(): number {
    let total = 0;
    let quantidade = 0;
    this.notas.forEach((nota) => {
      total += nota.nota;
      quantidade++;
    });
    let resultado = total / quantidade;
    return resultado;
  }
}
