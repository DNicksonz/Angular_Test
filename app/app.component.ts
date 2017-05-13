import {Component} from '@angular/core'
import {Todo} from './shared/todo'
import {todos} from './shared/date'


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',
    styleUrls: ['app.components.css']
})
export class AppComponent {
    title = 'Go avay';
    
}