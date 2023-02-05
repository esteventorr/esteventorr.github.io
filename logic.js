// Array Length
const seccion0activada = false;

var arr = [1, 3, 4];

if (seccion0activada) console.log(arr.length);

var obj = { a: 1, b: 2, c: 3 };

var lengthOfObject = Object.keys(obj).length;

if (seccion0activada) console.log(lengthOfObject);

// Mergin

const seccion1activada = false;

var defaultUser = {
  name: "",
  email: "",
  subscribed: true,
};

var actualUser = {
  name: "Don",
  email: "don@gmail.com",
};

var user2 = {
  name: "D2on",
  phone: 555 - 525 - 5252,
};

if (seccion1activada) console.log("user2", user2);

var userData = Object.assign(user2, defaultUser, actualUser);
if (seccion1activada) console.log(userData, user2);

var spreadMethod = { ...defaultUser, ...actualUser, ...user2 };
if (seccion1activada) console.log("Spread", spreadMethod);

if (seccion1activada) console.log(userData, user2);

// Computed Properties
const seccion2activada = false;

//var key = window.prompt('Set property name');
var key = "custom_name";
var obj = {
  [key]: 1,
};
if (seccion2activada) console.log(obj);

var username = document.querySelector('[name="username"]');
var password = document.querySelector('[name="password"]');
if (seccion2activada) console.log(username, password);

var state = {};

var onKeyup = (event) => {
  var value = event.target.value;
  var name = event.target.name;

  state[name] = value;
  if (seccion2activada) console.log(state);
};
username.addEventListener("keyup", onKeyup);
password.addEventListener("keyup", onKeyup);
