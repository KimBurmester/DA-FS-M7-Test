let myCompany = {
  'department':'production',
  'machines':'CNC milling machine',
  'production_Line':{
    'Line':15,
    'department': 'Entfertigung',
    'Serial Number': 'HLKX56094'
  },
  'manufacturer':'Siemens AG',
  'supplier':function(number){
    console.log('Rubix' + " " + number)
  },
};

let department = 'department';
let machines = 'machines';
let productionLines = 'production_Line';

console.log("My Company Objekt in der Tabelle");
console.table(myCompany);

console.log("My Company Objekt in der Methode Supplier");
myCompany.supplier(79663);

console.log("My Company Objekt im Objekt.keys");
console.table(Object.keys(myCompany))

console.log("My Company Objekt im Objekt.entries");
console.table(Object.entries(myCompany))

 //NOTE: Array erstellen aus einem Objekt
console.log("My Company Objekt Ausgabe im For-Loop");
let objKeys = Object.keys(myCompany);
let ourArray = [];
for (let i = 0; i < objKeys.length; i++) {
  const element = objKeys[i];
  ourArray.push(myCompany[objKeys[i]]);
}
console.table(ourArray);


/*{
    'supplier_Name':'Rubix',
    'supplier_Number': 79663
},*/