import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tarefas = [
    { id: 1, titulo: 'Estudar Angular', concluida: false }
  ];

  concluir(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
  }

  remover(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }
}