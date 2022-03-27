import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['../../styles/add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  initInputs() {
    this.title = "";
    this.desc = "";
  }

  onSubmit() {
    if (this.title.length <= 0) return;
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    this.initInputs();
  }
}
