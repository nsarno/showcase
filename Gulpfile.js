var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');

gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('build', function() {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
  .pipe(sourcemaps.init())
    .pipe(webpack(require('./webpack.config')))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
