// Without Object

let name="Raksha";
let age=21;
let location="Chennai";

console.log(name);
console.log(age);
console.log(location);


// With Objects

let student = {
    name: "Raksha",
    age: 22,
    city: "Chennai"
};

console.log(student);


// Declared and later initialize

let school={};
console.log(typeof school);
school.name="Velammal HSS";
school.student=600;
console.log(school);


// Accessing

// Dot

let home={
    NoofMembers:4,
    type:"Independent House",
    noofrooms:4,
    location:"Thiruvarur"
}

console.log(home.NoofMembers);
console.log(home.location);


// Bracket

let house={
    NoofMembers:4,
    type:"Independent House",
    noofrooms:4,
    location:"Thiruvarur"
}

console.log(house[noofrooms]);
console.log(house[type]);
