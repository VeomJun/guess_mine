import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso"
import trash from "trash"
import bro from "gulp-browserify"
import babel from "babelify"

sass.compiler = require("node-sass")

const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss"
        // 위 코드는 gulp가 assets의 scss 파일 내부에
        // scss라는 확장자를 지니고 있는 모든 파일을 지켜보게 함을 의미한다.
    },
    js: {
        src: "assets/js/main.js",
        dest: "src/static/js",
        watch: "assets/js/**/*.js"
    }
}

const clean = () => trash(["src/static"]);



const styles = () => 
    gulp
    .src(paths.styles.src)
    // assets에 있는 파일이
    .pipe(sass())
    // 파이프의 sass를 통해
    .pipe(
        autoprefixer({
            overrideBrowserslists:["last 2 versions"],
            cascade: false
        })
    )
    .pipe(minifyCSS())
    // gulp-csso는 작성된 css를 간결하게 정리해줌.
    .pipe(gulp.dest(paths.styles.dest))
    // 목적지인 소스코드의 styles 폴더에 파일을 생성함.
// src(소스코드)의 위치를 정의해 둠.

const js = () => gulp
    .src(paths.js.src)
    .pipe(bro({
        transform: [
            babel.configure({
                presets: ["@babel/preset-env"]
            })
        ]
    }))
    .pipe(gulp.dest(paths.js.dest))

const watchFiles = () => {
    gulp.watch(paths.styles.watch, styles)
    gulp.watch(paths.js.watch, js)
}

const dev = gulp.series(clean, styles, js, watchFiles)
// 즉, 위 코드는 먼저 styles 함수를 통해 해당 scss 파일들을 
// 변환한 후 watchFiles 함수를 통해 변환된 파일들을 계속적으로 지켜보게 함.

export const build = gulp.series(clean, styles, js)

export default dev;