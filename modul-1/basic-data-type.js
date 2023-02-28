// tipe data pada typescript
//data type boolean
var isFinished = false;
console.log(isFinished, typeof isFinished);
var isFinished2 = true;
console.log(isFinished2, typeof isFinished2);
//data type number
var price = 150.34;
console.log(price, typeof price);
//data type number
var numOfEmployees = 25;
console.log(numOfEmployees, typeof numOfEmployees);
//data type string
var progLang = 'TypeScript';
console.log(progLang, typeof progLang);
//data type array
var university = ['UT', 'UGM', 'ITB'];
console.log(university, typeof university);
//data type tuple
var employee;
employee = [1, 'Nura Wiguna Saputra', true, 22, 'IT'];
console.log(employee, typeof employee);
//data type enum
var Color;
(function (Color) {
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Red"] = 9] = "Red";
})(Color || (Color = {}));
console.log(Color, typeof Color);
//data type any
var code;
console.log(code, typeof code);
code = 'my code';
console.log(code, typeof code);
code = 21;
console.log(code, typeof code);
//data type null
var valueNull = null;
console.log(valueNull, typeof valueNull);
//data type undefined
var valueUndefined = undefined;
console.log(valueUndefined, typeof valueUndefined);
//data type any
var valueAny = 'hello world';
console.log(valueAny, typeof valueAny);
valueAny = true;
console.log(valueAny, typeof valueAny);
valueAny = 42;
console.log(valueAny, typeof valueAny);
valueAny = 'TypeScript';
console.log(valueAny, typeof valueAny);
valueAny = [];
console.log(valueAny, typeof valueAny);
valueAny = {};
console.log(valueAny, typeof valueAny);
valueAny = Math.random;
console.log(valueAny, typeof valueAny);
valueAny = null;
console.log(valueAny, typeof valueAny);
valueAny = undefined;
console.log(valueAny, typeof valueAny);
// data type unknown
var valueUnknown = true;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = 42;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = 'TypeScript';
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = [];
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = {};
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = Math.random;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = null;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = undefined;
console.log(valueUnknown, typeof valueUnknown);
