var gulp = require('gulp'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify');

gulp.task('coffee-uglify', function () {
  var stream = gulp.src([
    "src/base64.coffee",
    "src/mime.coffee"
  ]);
  stream
    .pipe(concat('mime.coffee'))
    .pipe(coffee())
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(concat({path: 'mime.min.js'}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', [
    'coffee-uglify'
]);
