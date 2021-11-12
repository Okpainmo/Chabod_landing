'use strict';

// variables
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// sass and autoprefixer tasks

function buildStyles() {
  return gulp
    .src('Sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['> 1%'],
      })
    )

    .pipe(gulp.dest('Dist/Styles'));
}

exports.buildStyles = buildStyles;

// watch task - watches for sass(to compile to CSS). And for autoprefixing as well.

gulp.task('watch', function () {
  gulp.watch('Sass/**/*.scss', gulp.series('buildStyles'));
});
