import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent {
  tarefa = '';
  tarefas: string[] = [];

  adicionarTarefa() {
    const texto = this.tarefa.trim();
    if (texto) {
      this.tarefas.push(texto);
      this.tarefa = '';
    }
  }
}