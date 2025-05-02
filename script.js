//NOTE: Object definition
let myObjects = {
  'name': 'Kim',
  'age': 33,
  'job': {
    'name':'Dev-Mentor',
    'company':'DA'
  },
  'good_guy': true,
};

console.log(myObjects.name + " ist Mitarbeiter der Abteilung " + myObjects.job.name + " " + myObjects.job.company);

//NOTE: Oder kann auch so geschrieben werden. Du kannst console.table() nutzen, um es in einer Tabelle anzeigen zu lassen.

let objKey = 'job'
console.log(myObjects[objKey]);