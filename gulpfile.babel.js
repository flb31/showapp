'use strict';

var config = undefined;
const argv = require('yargs').argv;
const env = (argv.env === 'dev') ? 'dev' : 'prod';
const isDev = (env == 'dev');
const port = argv.port || 8080;
const live_port = argv.live_port || 35729;

var express = undefined;
var connect = undefined;
var jshint = undefined;

if (env === 'dev') {
  express = require('gulp-express');
  connect = require('gulp-connect');
  jshint = require('gulp-jshint');
} else {
  connect = { reload: () => true };
}

const gulp = require('gulp');
const clean = require('gulp-clean');
var concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const uglyfile = require('gulp-uglify');

gulp.task('js', () => {

  if(isDev){
    return gulp
      .src('src/app/**/*.js')
      .pipe(concat('app.min.js'))
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(gulp.dest('public/js'))
      .pipe(connect.reload());
  }else{
    return gulp
      .src('src/app/**/*.js')
      .pipe(concat('app.min.js'))
      //.pipe(uglyfile())
      .pipe(gulp.dest('public/js'));
  }
});

gulp.task('sass', () => {
  var conf = (!isDev)? {outputStyle: 'compressed'}: {};
  return gulp
    .src('src/sass/*.scss')
    .pipe(sass(conf).on('error', sass.logError))
    .pipe(gulp.dest('public/assets/css'))
    .pipe( gulpIf(isDev, connect.reload()) );
});

gulp.task('pug', ['clean:pug'], () => {
  return gulp
    .src(['src/**/*.pug'])
    .pipe(pug({ pretty: isDev }) )
    .pipe(gulp.dest('public'))
    .pipe( gulpIf(isDev, connect.reload()) );
});


gulp.task('watch', () => {

  gulp.watch('src/app/**/*.js', ['js']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch(['src/app/**/*.pug'], ['pug']);
  
  //vendors
  gulp.watch(['src/vendors/**/*'], ['vendors']);
  //img
  gulp.watch(['src/assets/img/**/*'], ['assets:img']);
  //icon
  gulp.watch(['src/assets/icon/**/*'], ['assets:icon']);
  //bower
  gulp.watch(['src/lib/**/*'], ['bower']);
});

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: port,
    livereload: {
      port: live_port
    }
  });
});

gulp.task('clean:pug', () => {
  return gulp
    .src(['public/*.html','public/app/**/*.html'], {read: false})
    .pipe(clean());
});

gulp.task('clean:bower', () => {
  return gulp
    .src(['public/lib'], {read: false})
    .pipe(clean());
});

gulp.task('clean:vendors', () => {
  return gulp
    .src(['public/vendors'], {read: false})
    .pipe(clean());
});

gulp.task('clean:img', () => {
  return gulp
    .src(['public/assets/img'], {read: false})
    .pipe(clean());
});

gulp.task('clean:icon', () => {
  return gulp
    .src(['public/assets/icon'], {read: false})
    .pipe(clean());
});

gulp.task('vendors', ['clean:vendors'], () => {
  return gulp
    .src('src/vendors/**/*', { base: 'src' })
    .pipe(gulp.dest('public'));
});

gulp.task('assets:img', ['clean:img'], () => {
  return gulp
    .src('src/assets/img/**/*', { base: 'src' })
    .pipe(gulp.dest('public'));
});

gulp.task('assets:icon', ['clean:icon'], () => {
  return gulp
    .src('src/assets/icon/**/*', { base: 'src' })
    .pipe(gulp.dest('public'));
});

gulp.task('bower', ['clean:bower'], () => {
  return gulp
    .src('src/lib/**/*', { base: 'src' })
    .pipe(gulp.dest('public'));
});

gulp.task('build', ['bower', 'vendors', 'assets:img', 'assets:icon', 'pug', 'js', 'sass']);
gulp.task('run', (callback) => {
  runSequence('build', 'connect', 'watch', callback);
});
