import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos: any[] = [];
  editMode: boolean = false;
  editedId: number;

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.todos[0].id = 0;
  }

  addTodo(todo: string) {
    this.todos.push({
      id: this.todos.length,
      label: todo,
      status: false
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    todo = '';
  }

  updateTodo(todo: string, id: number) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        if (!!todo) {
          this.todos[i].label = todo;
          localStorage.setItem('todos', JSON.stringify(this.todos));
          this.editMode = false;
          this.editedId = null;
          return;
        }
      }
    }
  }

  clear() {
    if (this.editMode) this.editMode = false;
    this.editedId = null;
  }

  archive(event: any) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === event.id) {
        this.todos[i] = event;
        localStorage.setItem('todos', JSON.stringify(this.todos));
        return;
      }
    }
  }

  update (event: any) {
    this.editMode = true;
    this.editedId = event;
  }

  delete (event: any) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === event) {
        this.todos.splice(i, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        return;
      }
    }
  }
}
