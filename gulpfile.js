var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

const { series, parallel, watch } = require('gulp');

function copy (){
  //Copy javascript files
  //Todo: minimize files
  gulp.src([
    'src/js/*.js'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/js'));

  //Copy css files
  //Todo: minimize files and handle sass
  gulp.src([
    'src/css/*.css'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/css'));

  return gulp.src([
    'src/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
  
}

function lib_copy(){
  return gulp.src([
    'node_modules/knockout/build/output/knockout-latest.js'
    /* More node module scripts here */
  ], {
    dot: true
  }).pipe(gulp.dest('src/js/vend'))
  .pipe(gulp.dest('dist/js/vend'))
}
// Static server
function serve(){
  browserSync.init({
      server: {
          baseDir: "dist"
      }
  });
  watch('src/*.html', function(cb) {
    copy();
    browserSync.reload();
    cb();
  });
}

exports.serve = series(lib_copy, copy, serve);
exports.default = series(lib_copy);