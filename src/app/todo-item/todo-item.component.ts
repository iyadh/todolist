import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() args: any;
  archived: boolean = false;
  @Output() archive = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public editItem(event: any) {
    this.edit.emit(this.args.id);
  }

  public deleteItem(event: any) {
    this.delete.emit(this.args.id);
  }

  public archiveItem(event: any) {
    if (this.args.status) {
      event.target.checked = false;
      this.args.status = false;
    } else {
      event.target.checked = true;
      this.args.status = true;
    }
    this.archive.emit(this.args);
  }

}
