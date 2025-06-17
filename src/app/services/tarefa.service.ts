import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private readonly STORAGE_KEY = 'angular-tasks';
  
  private tasks: Task[] = [];

  constructor() {

    this.loadTasksFromStorage();
  }

  
  private loadTasksFromStorage(): void {
    const tasksJson = localStorage.getItem(this.STORAGE_KEY);
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
  }


  private saveTasksToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
  }

 
  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    if (title.trim()) {
      const newTask: Task = {
        id: Date.now(), 
        title: title,
        completed: false
      };
      this.tasks.push(newTask);
      this.saveTasksToStorage(); 
    }
  }

  
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasksToStorage(); 
  }


  toggleCompleted(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasksToStorage(); 
  }

  
  updateTask(id: number, newTitle: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task && newTitle.trim()) {
      task.title = newTitle.trim();
      this.saveTasksToStorage(); 
    }
  }
}
