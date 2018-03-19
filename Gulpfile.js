//Dependencies import

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//Tasks definition

gulp.task('default', function() {
	//Uglify JS
    gulp.src(['src/js/*.js'])
    	.pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build'));
    console.log("JS build done.");

	//Compile SCSS to CSS
    gulp.src(['src/scss/*.scss'])
        .pipe(concat('main.css'))
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('build'));
    console.log("CSS build done.");
});