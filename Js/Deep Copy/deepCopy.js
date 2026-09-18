// Shallow Copy

let person={
    name:"Raksha",
    school:{
        name:"GRM",
        location:"TVR"
    },
    Student:true
}

let data={
    ...person
}

console.log(person); /* {
  name: 'Raksha',
  school: { name: 'GRM', location: 'TVR' },
  Student: true
} */
console.log(data); /* {
  name: 'Raksha',
  school: { name: 'GRM', location: 'TVR' },
  Student: true
} */

data.school.location="Thanjavur";

console.log(person); /* {
  name: 'Raksha',
  school: { name: 'GRM', location: 'Thanjavur' },
  Student: true
} */
console.log(data); /* {
  name: 'Raksha',
  school: { name: 'GRM', location: 'Thanjavur' },
  Student: true
} */


//   Deep Copy

let school={
    name:"GRM",
    location:"TVR",
    student:{
        total:500,
        passed:450,
        failed:50
    }
}

let schooldata=structuredClone(school);
console.log(school); /* {
  name: 'GRM',
  location: 'TVR',
  student: { total: 500, passed: 450, failed: 50 }
} */
console.log(schooldata); /* {
  name: 'GRM',
  location: 'TVR',
  student: { total: 500, passed: 450, failed: 50 }
} */

schooldata.student.name="Rakshan";
console.log(school); /* {
  name: 'GRM',
  location: 'TVR',
  student: { total: 500, passed: 450, failed: 50 }
}  */
console.log(schooldata);  /* {
  name: 'GRM',
  location: 'TVR',
  student: { total: 500, passed: 450, failed: 50, name: 'Rakshan' }
} */