//ex -1 using jsx

// const element = <h1>HELLO JSX</h1>;
// ReactDOM.render(element, document.getElementById("root"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ex-2 without using jsx i.e React.createElement()

// const element1 = React.createElement("h1", null, "hello JSX using method ");
// ReactDOM.render(element1, document.getElementById("root"));

// const item = React.createElemaAent("h1", null, "Baked Salmon");
// ReactDOM.render(item, document.getElementById("root"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //ex-3 jsx using expression

// const pname = "thasmay";
// const pelement = <h2>Hello!!,Ms.{pname}</h2>;
// ReactDOM.render(pelement, document.getElementById("root"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // ex-4 jsx with functions

// function Employee(user) {
//   return user.fname + user.lname;
// }
// const user = {
//   fname: "charlie",
//   lname: "Smith",
// };
// const empDetails = <h1>Hello,{Employee(user)}</h1>;
// ReactDOM.render(empDetails, document.getElementById("root"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ex-5 (displaing date and time with 1 sec time delay)

// function Clock() {
//   let element = (
//     <div>
//       <h1>hello Welcome</h1>
//       <h2>the timing is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(Clock, 1000);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ex-6 using React.createElement() with class

// const jsxElement = React.createElement(
//   "h1",
//   { className: "test", id: "demo" },
//   "Life is BEAUTIFULL!!!"
// );
// console.log("jsx element is", jsxElement);
// ReactDOM.render(jsxElement, document.getElementById("root"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ex-7 creating multiple elements using React.createElement()

// const ele = React.createElement(
//   "h1",
//   null,
//   React.createElement("p", null, "always stay positive")
// );
// ReactDOM.render(ele, document.getElementById("root"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ex-8

const ele1 = React.createElement(
  "ul",
  { id: "menu" },
  React.createElement("li", { className: "sweets" }, "Gulab jamoon")
);
// console.log(ele1);
ReactDOM.render(ele1, document.getElementById("root"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
