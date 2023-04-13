/*console.log("Hi")
console.log("welcome")
let myGame= 2, prediction ="2"
let outcome= (myGame == prediction) ? 'win' : 'loose'; 
console.log(outcome)
*/

/*for(i=1; i < a.length; i++) {
    console.log(a[i]);
}
*/
let b = [3,8,4,0,9,1]
for (let a = 0; a < b.length; a++) {
    const c = b[a];
    console.log(c);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsById("menu").style.top = "71px";
  } else {
    document.getElementsById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




