var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    CONSTANTS = {
        "js": {
            "path": "js/**/*.js",
            "dest": "js/"
        },
        "css": {
            "path": "sass/**/*.scss",
            "dest": "./css"
        },
    };

gulp.task('default', ['styles'], function() {
    gulp.watch(CONSTANTS.css.path, ['styles']);
    gulp.watch(CONSTANTS.js.path, ['lint']);

    browserSync.init({
        server: './'
    });
    browserSync.stream();
});

gulp.task('styles', function() {
    gulp.src(CONSTANTS.css.path)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(CONSTANTS.css.dest))
        .pipe(browserSync.stream());
});

gulp.task('lint', function() {
    return gulp.src([CONSTANTS.js.path])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
