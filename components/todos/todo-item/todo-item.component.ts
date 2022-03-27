import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../../styles/components/todos/todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo = new Todo;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // onClick(sno: number) {
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick-ed");
  }

}
