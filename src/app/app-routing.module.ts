import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'aluno', component: AlunosComponent },
  { path: 'detalhe/:id', component: DetalheAlunoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
