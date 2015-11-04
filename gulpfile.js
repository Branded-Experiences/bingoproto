'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var sass = require('gulp-sass');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

/*
gulp.task('browserify', function() {
    return browserify('./src/js/app.js', { debug: true })
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/js'));
});
*/

gulp.task('reactify', function() {
  var bundler = watchify(browserify({
    entries: ['./src/js/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./dist/js/'));
  };
  build();
  bundler.on('update', build);
});

gulp.task('sass', function () {

   return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());  
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass','reactify'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/**/*.scss", ['sass']).on('change', browserSync.reload);
    //gulp.watch("src/js/**/*.js", ['browserify']).on('change', browserSync.reload);
    gulp.watch("dist/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);



