let x = "hi i am anna";
let str = x.split(" ").join("").length;

if (str > 8 && x.includes("hi")) {
  console.log("string is valid");
} else {
  console.log("string is invalid");
}
