const uniqueValueVar = { hello: "It's me" };

function testFunction(a, b, c, ...rest) {
    jjj = 6;
  var normalVar = "1";
  let scopedVar = "wow";

  if (true) {
    uniqueValueVar;
    normalVar;
    var normalVar = "2";
    normalVar;
    let scopedVar = "wowwwww";
    scopedVar;
    uniqueValueVar.hello = "My God";
    uniqueValueVar.wow = "myyyy";
  }
  normalVar;
  scopedVar;
}
testFunction();

var func1;

console.log(func1);

// ES5
func1 = function (x, y) {
  console.log(this);
  return x * y;
};

// ES6
// In the Arrow functions the "this" is always the function owner
// In the ES5 functions the "this" is the object calling the function
const func2 = (x, y) => {
  console.log(this);
  return x * y;
};

console.log(func1(2, 2));

console.log(func2(2, 2));

const numbers = [46, 355, 143, 221];

console.log(
  numbers.findIndex((value, index) => {
    console.log(index);
    return value > 100;
  })
);

let maxNum = Math.max(4555, ...numbers);
maxNum;
let obj1 = {
  prop1: "1",
  prop2: "5",
};

for (x of Object.values(obj1)) {
  console.log(x);
}

for (x in numbers) {
  console.log(x);
}

let obj2 = {
  prop2: "New Data",
  prop3: "Wow",
};

let obj4 = {};

Object.assign(obj4, obj1, obj2);
obj4;

let obj3 = {
  ...obj1,
  ...obj2,
};

obj1;
obj2;
obj3;

function Destructuring({ prop2, prop1 }) {
  return prop1 + prop2;
}

let result = Destructuring(obj4);
result;

// Fetching
async function pokeGet() {
  var res1 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(res1);
  var res2 = await res1.json();
  console.log(res2);
  return res2;
}

var dataToSend = {
    name: "Jackie"
}

async function postRequest(url , data){
    var res1 = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(error => console.log("Error", error));
}

//pokeGet();

class Course {
    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }
    get description () {
        console.log(`Welcome to the ${this.name} course, it will take ${this.duration}`);
    }
}

var myCourse = new Course("Math", "4");
myCourse;
myCourse.description
myCourse.duration = 5;
myCourse.description;

jj = 5;
jj;
var jj;
jj;

jjj;