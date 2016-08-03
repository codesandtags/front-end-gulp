var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var CONFIG = {
    "CSS": {
        "path": "sass/**/*.scss",
        "dest": "./css",
        "autoprefixer": {
            "browsers": ['last 2 versions']
        }
    }
};

gulp.task('default', function() {
    console.log('hello world!');
});

gulp.task('styles', function() {
    gulp.src(CONFIG.CSS.path)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: CONFIG.CSS.autoprefixer.browsers
        }))
        .pipe(gulp.dest(CONFIG.CSS.dest));
});
