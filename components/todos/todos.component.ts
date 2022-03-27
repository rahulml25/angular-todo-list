import { Component, OnInit } from '@angular/core';
import { Todo } from 'models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['../../styles/todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() {
    this.retrieveTodos();
  }

  ngOnInit(): void {
  }

  retrieveTodos() {
    const todos = localStorage.getItem('todos') as string;
    if (todos) this.todos = JSON.parse(todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    this.todos[idx].active = !this.todos[idx].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
