import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['../../styles/components/add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }

}
