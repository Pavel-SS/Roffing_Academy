const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const dist = "./dist";

gulp.task('server', () => {
    browserSync.init({
        server:{
            baseDir: 'src'
        }
    })
})

gulp.task('style', () => {
    return gulp.src("src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
})



gulp.task("watch", () => {

    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("style"));

});

gulp.task("default", gulp.parallel("watch", "server", "style", ));

