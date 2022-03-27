import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../../styles/todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() idx: Number = new Number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getCheckboxId = () => (`todo-item-${this.idx}`);

  onDeleteClick() {
    this.todoDelete.emit(this.todo);
  }

  onCheckboxClick() {
    this.todoToggle.emit(this.todo);
  }

}
