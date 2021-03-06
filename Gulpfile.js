'use strict';

var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var path = {
  scripts: ['src/**/*.js', 'src/**/*.jsx'],
  styles: ['src/**/*.scss'],
  dist: 'dist',
  webpackConfig: './webpack.config.js'
}

gulp.task('scripts', function() {
  return gulp.src(path.scripts)
    .pipe(sourcemaps.init())
      .pipe(webpack(require(path.webpackConfig)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dist));
});

function sassError(e) {
  sass.logError(e);
  this.emit('end');
}

gulp.task('styles', function() {
  return gulp.src(path.styles)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sassError))
    .pipe(sourcemaps.write('.'))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.dist));
});

gulp.task('build', ['scripts', 'styles']);

gulp.task('clean', function(cb) {
  del(['dist/**/*'], cb);
});

gulp.task('refresh-scripts', ['scripts'], browserSync.reload);
gulp.task('refresh-styles', ['styles'], browserSync.reload);

gulp.task('serve', ['build'], function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(path.scripts, ['refresh-scripts']);
    gulp.watch(path.styles, ['refresh-styles']);
});

gulp.task('default', ['serve']);
