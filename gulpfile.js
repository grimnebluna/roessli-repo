const { src, dest, parallel, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function jsTask() {
    return src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function cssTask() {
    return src('src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

// Define a watch task
function watchTask() {
    watch('src/*.js', jsTask);
    watch('src/*.scss', cssTask);
}

// Using 'series' here to ensure that the watchTask gets a name in the log output
exports.default = series(parallel(jsTask, cssTask), watchTask);
