
  class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
  };

  var students1 = [new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane")];

    function sort(students) {
        let stringStudents =''
students.sort((a,b) =>{
    const gpaDif = b.gpa - a.gpa;
if (gpaDif!==0) 
    return gpaDif
const lastNameA =a.fullName.split(' ')[1][0]
const lastNameB = b.fullName.split(' ')[1][0]
if(lastNameA !== lastNameB){
    return lastNameA < lastNameB ? -1 : 1;
}
return a.age - b.age})



     

for (let i=0; i<students.length; i++){
  
    if(i===students.length-1){
stringStudents +=`${students[i].fullName}`

} else {
    stringStudents +=`${students[i].fullName}`
stringStudents +=','
}
}
        return  stringStudents;


    };
  console.log( sort(students1))