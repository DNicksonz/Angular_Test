import {Component , Input , Output} from '@angular/core'
import {Todo} from '../shared/todo'



@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-list-item.conponent.html',
    styleUrls: ['todo-list-item.conponent.css']
})
export class TodoItemComponent{
    @Input() todo : Todo ;
    toggle(){
        this.todo.completed = !this.todo.completed ;
    }
}