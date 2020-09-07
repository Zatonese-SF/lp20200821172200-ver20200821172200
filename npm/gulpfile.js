{
    'use strict';

    const gulp = require('gulp'),
        gulpPlumber = require('gulp-plumber'),
        gulpNotify = require('gulp-notify'),
        gulpPostcss = require('gulp-postcss'),
        autoprefixer = require("autoprefixer");
        cssMqpacker = require('css-mqpacker'),
        gmmq = require('gulp-merge-media-queries'),
        gulpSass = require('gulp-sass'),
        gulpStylelint = require('gulp-stylelint'),
        gulpSvgmin = require('gulp-svgmin'),
        gulpSvgSprite = require('gulp-svg-sprite');





    const style = () => {

            return gulp.src(

                [
                    '../sass/*.scss',
                    // '../sass/device/mobile/style-sp.scss',
                    // '../sass/device/mobile/style-tab.scss',
                    // '../sass/device/mobile/style-mobile.scss',
                    // '../sass/device/mobile/style-pc.scss',
                ]
            )

            .pipe(
                gulpSass({outputStyle: 'expanded'})
                    .on('error', gulpSass.logError)
            )

            // .pipe(gmmq({ log: true }))

            // .pipe(
            //     gulpStylelint({
            //         fix: true
            //     })
            // )
            
            .pipe(gulpPostcss([
                autoprefixer({
                    // ☆IEは11以上、Androidは4.4以上
                    // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                    browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
                    cascade: false
                })
            ]))

            .pipe(gulpPostcss([cssMqpacker()]))

            .pipe(gulp.dest('../pub/css'));
    };

    const styleWatch = () => {

        gulp.watch('../sass/*.scss', style);
    };

    exports.style = style;

    exports.styleWatch = styleWatch;




    
    // SVG Minify
    const svgMinify = () => {

        return gulp.src('../svg-minify/_src/*.svg')

        .pipe(gulpSvgmin())

        .pipe(gulp.dest('../svg-minify/_dest/'))
    };

    exports.svgMinify = svgMinify;





    // SVG Sprite

    const svgSprite = () => {

        return gulp.src('../svg-sprite/_src/*.svg')

        .pipe(gulpSvgSprite({

            mode: {
                symbol: {
                    // スプライト画像を置くディレクトリ名。指定しないとデフォルト設定（svg）に。
                    dest: 'complete',
        
                    // スプライト画像のファイル名
                    sprite: 'svg-sprite.svg',
        
                    // スプライト画像のプレビュー用HTMLが欲しい人はこちらも記述してください。
                    // 任意の場所とファイル名を指定してください。
                    example: {
                        dest: 'svg-sprite.html',
                    }
                },
            } // mode
        }))

        // 書き出し先
        .pipe(gulp.dest('../svg-sprite/_dest/'))
    };

    exports.svgSprite = svgSprite;

}