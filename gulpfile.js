var coffee = require('gulp-coffee');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var karma = require('gulp-karma');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');


var globs = {
  lib: 'lib/**',
  templates: ['test/**/*.jade', 'src/**/*.jade'],
  scripts: ['src/**/*.coffee'],
  test_scripts: ['test/**/*.coffee']
};


gulp.task('jade', function () {
  gulp.src(globs.templates)
      .pipe(watch({glob: globs.templates}))
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('./build/'))
      .pipe(livereload({auto: false}));
});


gulp.task('coffee', function () {
  gulp.src(globs.scripts)
      .pipe(watch({glob: globs.scripts}))
      .pipe(coffee({bare: true, map: true}))
      .pipe(gulp.dest('./build/js'))
      .pipe(livereload({auto: false}));

  gulp.src(globs.test_scripts)
      .pipe(watch({glob: globs.test_scripts}))
      .pipe(coffee({bare: true, map: true}))
      .pipe(gulp.dest('./build/test'))
      .pipe(livereload({auto: false}));
});

gulp.task('lib', function () {
  gulp.src(globs.lib)
      .pipe(gulp.dest('./build/lib'));
});


gulp.task('watch', function () {
  livereload.listen();
});


gulp.task('default', ['watch', 'lib', 'jade', 'coffee']);