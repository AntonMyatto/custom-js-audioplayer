const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autopreffixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

function css_style(done) {
   gulp.src('./styles/scss/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass({
     errorLogToConsole : true,
     outputStyle: 'compressed'
   }))
    .pipe(autopreffixer({
        cascade : false,
        browsers: [
          'last 3 versions',
          '> 5%'
          ]
    }))
   .pipe(rename({suffix: '.min'}))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./styles/css/'));
   
   done();
}

function watchSass(){
  gulp.watch('./styles/**/*', css_style);
}

gulp.task('default', watchSass);


