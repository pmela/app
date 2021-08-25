import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlunosComponent } from './alunos/alunos.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAlunoComponent } from './modal-aluno/modal-aluno.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'angular2-chartjs';
import { HttpClientModule } from '@angular/common/http';
import { AlunoService } from './aluno.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    ModalAlunoComponent,
    DetalheAlunoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
