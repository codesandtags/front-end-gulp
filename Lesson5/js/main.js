(function() {

	var foo = 1;
    let prueba = 'abc';
    function f (x, y = 7, z = 42) {
        return x + y + z
    }
    f(prueba) === 50;

	return foo;
})();
