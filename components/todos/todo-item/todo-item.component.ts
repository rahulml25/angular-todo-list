import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../../styles/todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() idx!: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.todoDelete.emit(this.todo);
  }

  onCheckboxClick() {
    this.todoToggle.emit(this.todo);
  }

}
