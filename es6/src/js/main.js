import {firstName, foo} from './profile'; 
import * as math from './circleplus';
import exp from './circleplus';

console.log(exp(math.e));
console.log(foo);
setTimeout(()=>{console.log(foo);}, 1000);

for (let i = 0; i < 5; i++) { 
  setTimeout(function() { 
   console.log(i); 
 }, 1000 * i); 
} 

function f() { console.log('I am outside!'); }

(function () {
  if (false) {
	  function f() { console.log('I am inside!'); }
  }
  f();
}());
