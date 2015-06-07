var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');

var path = {
  scripts: ['src/**/*.js', 'src/**/*.jsx'],
  dist: 'dist',
  webpackConfig: './webpack.config.js'
}

gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('build', function() {
  return gulp.src(path.scripts)
  .pipe(sourcemaps.init())
    .pipe(webpack(require(path.webpackConfig)))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function() {
  gulp.watch(path.scripts, ['build']);
});

gulp.task('default', ['watch']);
