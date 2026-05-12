const add = require("./app.js");

if (add(2, 3) === 5) {
  console.log("Test passed: add(2,3) returns 5");
} else {
  console.log("test failed: add(2,3) does not return 5");
}
