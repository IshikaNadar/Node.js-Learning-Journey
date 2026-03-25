const figlet = require("figlet");
/*const a = require("./math") //if nothing module.exports then it will require empty object set
console.log(a);
console.log(a.sum(4,2));
console.log(a.diff(6,2));
console.log(a.PI);
console.log(a.diff);
const f = require("./FRUITS");
console.log(f);
console.log(f[1].name);
console.log(f[0].color); */
figlet("ISHIKA NADAR!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;}
  console.log(data);
});