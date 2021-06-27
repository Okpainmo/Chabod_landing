'use strict';

// variables
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const sassPartialsImported = require('gulp-sass-partials-imported');
// const browserSync = require('browser-sync').create();

sass.compiler = require('sass');

// custom-hello task
gulp.task('hello', function (done) {
    console.log('hello from gulp');
    done();
    });

//sass task with autoprefixer
gulp.task('sass', function () {
    return gulp.src('Gulp/Chabod-styles/Chabod-scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(gulp.dest('Gulp/Chabod-styles/Chabod-css'));
  });

// gulp.task('task-name', function () {   
//     return gulp.src('source-files')  //Get source files
//             .pipe(aGulpPlugin())     //Send it through a gulp plugin
//             .pipe(gulp.dest('destination'))  //Output to destination
//     })


// watch task
gulp.task('watch', function() {
    gulp.watch('Gulp/Chabod-styles/Chabod-scss/**/*.scss', gulp.series('sass'));
})