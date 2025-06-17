import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private idAtual = 1;

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  adicionarTarefa(titulo: string): void {
    this.tarefas.push({ id: this.idAtual++, titulo, concluida: false });
  }

  concluirTarefa(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
    }
  }

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }
}
