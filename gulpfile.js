// Include gulp
const
// modules
    gulp = require('gulp'),
    noop = require('gulp-noop'),
    newer = require('gulp-newer'),
    htmlclean = require('gulp-htmlclean'),

    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    terser = require('gulp-terser'),

    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    // development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

    stripdebug = devBuild ? null : require('gulp-strip-debug'),
    sourcemaps = devBuild ? require('gulp-sourcemaps') : null,



    // folders
    src = 'src/',
    build = 'build/'
;

// HTML processing
function html() {
    const out = build + 'html/';

    return gulp.src(src + 'html/**/*')
        .pipe(newer(out))
        .pipe(devBuild ? noop() : htmlclean())
        .pipe(gulp.dest(out));
}

exports.html = gulp.series(html);
// exports.html = gulp.series(images, html);


function js() {

    return gulp.src(src + 'js/**/*')
        .pipe(sourcemaps ? sourcemaps.init() : noop())
        .pipe(deporder())
        // .pipe(concat('main.js'))
        .pipe(stripdebug ? stripdebug() : noop())
        .pipe(terser())
        .pipe(sourcemaps ? sourcemaps.write() : noop())
        .pipe(gulp.dest(build + 'js/'));

}
exports.js = js;

function css() {

    return gulp.src(src + 'scss/main.scss')
        .pipe(sourcemaps ? sourcemaps.init() : noop())
        .pipe(sass({
            outputStyle: 'nested',
            imagePath: '/images/',
            precision: 3,
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(postcss([
            assets({ loadPaths: ['images/'] }),
            autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
            mqpacker,
            cssnano
        ]))
        .pipe(sourcemaps ? sourcemaps.write() : noop())
        .pipe(gulp.dest(build + 'css/'));

}
exports.css = gulp.series(css);

exports.build = gulp.parallel(exports.html, exports.css, exports.js);
// exports.css = gulp.series(images, css);


// watch for file changes
function watch(done) {

    // image changes
    // gulp.watch(src + 'images/**/*', images);

    // html changes
    gulp.watch(src + 'html/**/*', html);

    // css changes
    gulp.watch(src + 'scss/**/*', css);

    // js changes
    gulp.watch(src + 'js/**/*', js);

    done();

}
exports.watch = watch;

exports.default = gulp.series(exports.build, exports.watch);