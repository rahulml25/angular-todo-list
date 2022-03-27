import { Component, OnInit } from '@angular/core';
import { Todo } from 'models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['../../styles/components/todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    this.todos = [];
    this.retrieveTodos();
  }

  ngOnInit(): void {
  }

  retrieveTodos() {
    const todos = localStorage.getItem("todos") as string;
    if (todos) this.todos = JSON.parse(todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
