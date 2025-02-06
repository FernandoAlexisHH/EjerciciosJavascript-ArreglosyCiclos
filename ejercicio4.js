// Exercise #4 (sugerencia filter() e includes())
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

let student1Courses = ["Math", "English", "Programming", "hola", "Science"];
let student2Courses = ["Geography", "Spanish", "Programming", "Science"];

const commonCourses = (course1, course2) => {
  let equalCourses = [];
  for (let i = 0; i < course1.length; i++) {
    for (let j = 0; j < course2.length; j++) {
      if (course1[i] === course2[j]) equalCourses.push(course1[i]);
    }
  }
  return equalCourses;
};
//Con filter e includes
let commonCoursesArray = student1Courses.filter((course) =>
  student2Courses.includes(course)
);

console.log(commonCoursesArray);
console.log(commonCourses(student1Courses, student2Courses));
