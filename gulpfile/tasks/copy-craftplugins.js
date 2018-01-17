/**
 * Copy Craft Plugins
 * @description Copy all Craft Plugins
 */

import kc from '../../config.json'
import gulp from 'gulp'
import gutil from 'gulp-util'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

const copyKirbyPlugins = () => {
  gulp
    .src(kc.src.plugins + '**/*')
    .pipe(global.checkChanged === true ? $.changed(kc.dist.dist + 'site/plugins/') : gutil.noop())
    .pipe(gulp.dest(kc.dist.dist + 'craft/plugins/'))
}

gulp.task('copy:kirbyplugins', copyKirbyPlugins)
module.exports = copyKirbyPlugins
