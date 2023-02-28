// tipe data pada typescript

//data type boolean
let isFinished: boolean = false;
console.log(isFinished, typeof isFinished);

let isFinished2: boolean = true;
console.log(isFinished2, typeof isFinished2);

//data type number
let price: number = 150.34;
console.log(price, typeof price);

//data type number
let numOfEmployees: number = 25;
console.log(numOfEmployees, typeof numOfEmployees);

//data type string
let progLang: string = 'TypeScript';
console.log(progLang, typeof progLang);

//data type array
let university: string[] = ['UT', 'UGM', 'ITB'];
console.log(university, typeof university);

//data type tuple
let employee: [number, string, boolean, number, string]
employee = [1, 'Nura Wiguna Saputra', true, 22, 'IT'];
console.log(employee, typeof employee);

//data type enum
enum Color {
    Black = 2,
    Blue,
    Yellow,
    Green = 3,
    Red = 3*3,
}
console.log(Color, typeof Color);

//data type any
let code: string | number;
console.log(code, typeof code);
code = 'my code';
console.log(code, typeof code);
code = 21;
console.log(code, typeof code);

//data type null
let valueNull = null;
console.log(valueNull, typeof valueNull);

//data type undefined
let valueUndefined = undefined;
console.log(valueUndefined, typeof valueUndefined);

//data type any
let valueAny: any = 'hello world';
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
let valueUnknown: unknown = true;
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

