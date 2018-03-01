import {Component} from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector : 'courses',
    template : 
        `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor = "let course of courses">
                {{course}}
            </li>
        </ul>
        <input [(ngModel)] = "email" (keyUp.Enter) = "onKeyUp()"/>
        
        <div (click) = "onDivClick($event)">
            <button class = "btn btn-primary" 
            [class.isActive] = "isActive" 
            [style.backgroundColor] = "isActive ? 'black': 'Red'"
            (click) = "onSave($event)"
            >Save</button>
        </div>
        
        `,
})
export class CoursesComponent {
    title = "List Of Courses";
    courses;
    isActive = true;
    email = "example@gmail.com";
    constructor(service : CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Save Button Clicked !");
        console.log($event);
    }

    onDivClick($event){
        console.log("Clicked on Div ! ");
        console.log($event);
    }

    onKeyUp(email){
        console.log("Enter was pressed !!");
        console.log("input : ", this.email);
    }

}