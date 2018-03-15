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
        <br/> <br/> <br/>
        <div>
            Name : {{coursesList[0].name | uppercase | lowercase}} <br/>
            Price : {{coursesList[0].price | number}} <br/>
            Students : {{coursesList[0].students | number}} <br/>
            Rating : {{coursesList[0].rating | number}} <br/>
            Release Date : {{coursesList[0].releaseDate | date : 'shortDate'}}
        </div>
        `,
})
export class CoursesComponent {
    title = "List Of Courses";
    courses;
    coursesList;
    isActive = true;
    email = "example@gmail.com";
    constructor(service : CoursesService){
        this.courses = service.getCourses();
        this.coursesList = service.getCourseList();
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