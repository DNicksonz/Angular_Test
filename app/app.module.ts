import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TodoFormComponent} from './todoform/todo-from.components';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-list-item.conponent';

@NgModule({
    imports: [BrowserModule , FormsModule],
    declarations: [AppComponent , TodoFormComponent, TodoListComponent , TodoItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}