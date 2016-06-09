var gulp = require('gulp'),
  processhtml = require('gulp-processhtml')
  concat = require('gulp-concat')
  uglify = require('gulp-uglify')
  htmlmin = require('gulp-htmlmin')
  cssmin = require('gulp-cssmin')
  rename = require('gulp-rename')
  gzip = require('gulp-gzip')
  watch = require('gulp-watch')
  jscs = require('gulp-jscs')
  ;

var htmlSrc = [
  'client/*.html',
  'client/**/*.html',
];

var jsSrc = [
  'client/*.js',
  'client/**/*.js',
  '!client/**/*spec.js',
];

var jsVendor = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/angular/angular.js',
  'node_modules/angular-route/angular-route.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/lodash/lodash.js',
];

var cssSrc = [
  'client/style/*.css',
];

var cssFonts = [
  'node_modules/bootstrap/fonts/*',
];

var cssVendor = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'node_modules/angular-ui-bootstrap/dist',
];

var distTarget = 'build'

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('style', function() {
  return gulp.src(jsSrc)
    .pipe(jscs({fix: true}))
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(gulp.dest('app'));
});

gulp.task('jsSrc', function() {
  return gulp.src(jsSrc)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest(distTarget));
});

gulp.task('jsVendor', function() {
  return gulp.src(jsVendor)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest(distTarget));
});

gulp.task('cssSrc', function() {
  return gulp.src(cssSrc)
    .pipe(cssmin())
    .pipe(concat('style.min.css'))
    .pipe(gzip())
    .pipe(gulp.dest(distTarget));
});

gulp.task('cssVendor', function() {
  return gulp.src(cssVendor)
    .pipe(cssmin())
    .pipe(concat('vendor.min.css'))
    .pipe(gzip())
    .pipe(gulp.dest(distTarget));
});

gulp.task('cssFonts', function() {
  return gulp.src(cssFonts)
    .pipe(gulp.dest('fonts'));
});

gulp.task('processhtml', function() {
  return gulp.src(htmlSrc)
    .pipe(processhtml())
    .pipe(gulp.dest(distTarget));
});

gulp.task('watch', function () {
  gulp.watch(['client/*', 'client/**/*'], [ 'build' ]);
});

gulp.task('build', [ 'style', 'jsSrc', 'jsVendor', 'cssSrc', 'cssVendor', 'cssFonts', 'processhtml']);
