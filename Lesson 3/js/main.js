(function() {
    var foo = 1,
        cosa = 'cosa',
        CONSTANTS = {
            'js': {
                'path': 'js/**/*.js',
                'dest': 'js/'
            },
            'css': {
                'path': 'sass/**/*.scss',
                'dest': './css'
            }
        };

    return foo + CONSTANTS;
})();
