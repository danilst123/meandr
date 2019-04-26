'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
 
gulp.task('sass', function () {
  return gulp
    .src(['./src/less/**/*.less'])
  	.pipe(concat('styles.sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.sass', gulp.series('sass'));
});

gulp.task('less', function () {  
  return gulp.
    src(['./src/less/**/*.less'])
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./src/css/'))
});

gulp.task('less:watch', function () {
  gulp.watch('./src/less/**/*.less', gulp.series('less'));
});
