import {Component} from '@angular/core';


@Component({
    selector : '{{title}}',
    template : 
        `
        <ul>
            <li *ngFor = "let course of courses">
                {{course}}
            </li>
        </ul>
        `,
})
export class CoursesComponent {
    title = "List Of Courses";
    courses = ["Course 1", "Course 2", "Course 3"];

}