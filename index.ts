//to check tsc -v
// to install typescript in terminal => npm install -g typescript

//* variable declaration methods
//? var, let , const

//* datatypes
//? string
let a: string;
//? number
let b: number;
//? boolean
let c: boolean;
//? null
let d: null;
//? undefined
 let e: undefined;

//* special types
//? any => it  doesn't check type
let f: any; // f type check nai garne
f = "any type"
f = 12;
//console.log(f.toUpperCase());


//?  unknown => it check the type
let g: unknown;
g = "unknown type";
g = 199;

// if (typeof g === "string") {
//     console.log(g.toUpperCase());
// }


//? void
//? never

//! type inference
// let a = 12;
 //a = ''

//! type Annotation
// let b:string;
// b = 12;

//* array
let numbers:number[] = [12, 4, 56, 45 ,50]
//numbers.push("1")
numbers.push(23)

let string: string[] = ["a"]

//* tuple => fix type and length of array
//id, name , email , age , password  => [id , name , email, age , password] => [number, string , string, number , string]
let usrTuple: [number, string, string, number, string] = [
    1,
     "john",
      "john@gmail.com",
       24,
        "12345"
      ]

 console.log(usrTuple);
      
// users: 
let users: [number, string, string, number, string][] = [
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
    [1,"john", "john@gmail.com", 24, "12345"],
]

//* object
//! type alias

//! type literal

//! function

//! class

//! interface

//! generic type

// afno git hub ma push garne public rakha ne
