const db = require('./server/db');
const Campus = require('./server/db/models/Campus');
const index = require('./server/db/models/index');
const Student = require('./server/db/models/Student');

const campuses = [
  { name: 'Mercury', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "Welcome to the Mercury Campus" },
  { name: 'Venus', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "This is Venus!!!!" },
  { name: 'Earth', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "I am what I eat, straight up Earth." },
  { name: 'Mars', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "Mars bars?" },
  { name: 'Jupiter', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "No one's stupider than the students on Jupiter." },
  { name: 'Saturn', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "GREAT cars!" },
  { name: 'Uranus', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "well okay then..." },
  { name: 'Neptun', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "This is Neptun." },
  { name: 'Pluto', imageUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg", description: "Last but not least." }
];

const students = [{
  firstName: 'Joe',
  lastName: "Gajeski",
  email: "Joe@gmail.com",
  gpa: 3.4,
  campusId: 1
}, {
  firstName: 'John',
  lastName: "SMITH",
  email: "John@gmail.com",
  gpa: 3.2,
  campusId: 3
},{
  firstName: 'Mike',
  lastName: "JOHNSON",
  email: "Mike@gmail.com",
  gpa: 1.2,
  campusId: 2
}, {
  firstName: 'Raul',
  lastName: "DAVIS",
  email: "Raul@gmail.com",
  gpa: 2.4,
  campusId: 5
}, {
  firstName: 'Amanda',
  lastName: "BROWN",
  email: "Amanda@gmail.com",
  gpa: 4.0,
  campusId: 6
},{
  firstName: 'Courtney',
  lastName: "MILLER",
  email: "Coutney@gmail.com",
  gpa: 3.3,
  campusId: 7
},{
  firstName: 'Alexa',
  lastName: "WILSON",
  email: "Alexa@gmail.com",
  gpa: 2.9,
  campusId: 8
},{
  firstName: 'JT',
  lastName: "MOORE",
  email: "JT@gmail.com",
  gpa: 3.0,
  campusId: 5
},{
  firstName: 'Alyssa',
  lastName: "ANDERSON",
  email: "Alyssa@gmail.com",
  gpa: 2.3,
  campusId: 4
},{
  firstName: 'Dan',
  lastName: "THOMAS",
  email: "Dan@gmail.com",
  gpa: 3.5,
  campusId: 3
},{
  firstName: 'Patrick',
  lastName: "JACKSON",
  email: "Patrick@gmail.com",
  gpa: 3.2,
  campusId: 9
} ];


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));


const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
