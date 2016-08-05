'use strict';

function getWindowHeight() {
	alert('Hola');
	return window.innerHeight;
}

getWindowHeight();
'use strict';

(function () {

   var foo = 1;
   var prueba = 'abc';
   function f(x) {
      var y = arguments.length <= 1 || arguments[1] === undefined ? 7 : arguments[1];
      var z = arguments.length <= 2 || arguments[2] === undefined ? 42 : arguments[2];

      return x + y + z;
   }
   f(prueba) === 50;

   return foo;
})();