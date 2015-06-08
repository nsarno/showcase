var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync');

var path = {
  scripts: ['src/**/*.js', 'src/**/*.jsx'],
  dist: 'dist',
  webpackConfig: './webpack.config.js'
}

gulp.task('build', function() {
  return gulp.src(path.scripts)
  .pipe(sourcemaps.init())
    .pipe(webpack(require(path.webpackConfig)))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(path.dist));
});

gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('refresh', ['build'], browserSync.reload);

gulp.task('serve', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(path.scripts, ['refresh']);
});

gulp.task('default', ['serve']);
