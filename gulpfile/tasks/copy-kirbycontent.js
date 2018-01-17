/**
 * Template Compiler
 *
 * @description Compile Twig Files to HTML or copy Structure Files (usefull for PHP or Source Files for a CMS Compiler.
 */

import kc from '../../config.json'
import pkg from '../../package.json'
import gulp from 'gulp'
import gutil from 'gulp-util'
import gulpLoadPlugins from 'gulp-load-plugins'
import errorHandler from '../lib/errorHandler'
import yargs from 'yargs'

const args = yargs.argv
const $ = gulpLoadPlugins()

const copyKirbyContentTask = () => {
  // Simple Copy Files
  gulp.src([kc.src.content + '**/**', kc.src.content + '**/.*'])
    .pipe(global.checkChanged === true ? $.changed(kc.dist.content) : gutil.noop())
    .pipe(gulp.dest(kc.dist.content))
}

gulp.task('copy:kirbycontent', copyKirbyContentTask)
module.exports = copyKirbyContentTask
