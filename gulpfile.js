const { src, dest, parallel, series, watch } = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
function cssTask() {
    return src([
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
            'src/roessli.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function jsTask() {
    return src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
            'node_modules/@studio-freight/lenis/dist/lenis.min.js',
            'src/roessli.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function structuredDataTask() {
    return src('src/structured-data.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(rename('structured-data.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function watchTask() {
    watch('src/*.js', parallel(jsTask, structuredDataTask));
    watch('src/*.scss', cssTask);
}


exports.default = series(parallel(jsTask, cssTask, structuredDataTask));
