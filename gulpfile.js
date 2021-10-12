var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var purgeSourcemaps = require('gulp-purge-sourcemaps');

var inputScss = "./dist/scss/**/*.scss"; /*watches sub folders inside sass folder */
var output = "./static/css";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('images', function (cb) {
  gulp.src(['assets/**/*.png', 'assets/**/*.jpg', 'assets/**/*.gif', 'assets/**/*.jpeg']).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('_site/assets/img')).on('end', cb).on('error', cb);
});

gulp.task('scss', function () {
  return gulp
    .src(inputScss)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      browsers: ['> 1%']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
    .pipe(purgeSourcemaps())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cleanCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(output));
});

gulp.task('watch-scss', function () {
  gulp.watch(inputScss, ['scss']);
  gutil.log(process.version);
});

