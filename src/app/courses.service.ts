

export class CoursesService {
    getCourses(){
        return ["React Js", "Angular", ".Net Core"];
    }

    getCourseList(){
        let coursesList = [
            {
                name : "React",
                price : 1000.987,
                rating : 4.907,
                students : 197657,
                releaseDate : new Date(2018, 3, 10)
            },
            {
                name : "Angular",
                price : 900.765,
                rating : 3.907,
                students : 7657,
                releaseDate : new Date(2018, 3, 12)
            }
        ];
        return coursesList;
    }
}