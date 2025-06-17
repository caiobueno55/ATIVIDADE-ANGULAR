import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovaTarefaComponent } from './pages/nova-tarefa/nova-tarefa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nova', component: NovaTarefaComponent }
];