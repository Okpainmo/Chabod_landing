"use strict";

// variables
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

// custom-hello task
gulp.task("hello", function (done) {
  console.log("hello from gulp");
  done();
});

// sass task
function buildStyles() {
  return gulp
    .src("Sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("Dist/Styles/chabod_landing.css"));
}

exports.buildStyles = buildStyles;

// autoprefixer task
exports.default = () =>
  gulp
    .src("Sass/**/*scss")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("Dist/Styles/chabod_landing.css"));

// watch task
gulp.task("watch", function () {
  gulp.watch("Sass/**/*.scss", gulp.series("buildStyles"));
});
