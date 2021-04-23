import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List';

  TodoList = [];
  TodoElement = '';

  ngOnInit() {
    this.TodoList = [
      {
        name: 'First todo',
        priority: 1,
        completed: false,
      },
      {
        name: 'Second todo',
        priority: 2,
        completed: false,
      },
      {
        name: 'Third todo',
        priority: 3,
        completed: false,
      },
    ];
  }

  addTodo() {
    const todo = {
      name: this.TodoElement,
      priority: 1,
      completed: true,
    };
    this.TodoList.push(todo);
  }

  deleteTodo(task) {
    this.TodoList = this.TodoList.filter((item) => item.name !== task.name);
  }

  todoCompleted(task) {
    task.completed = !task.completed;
  }
}
