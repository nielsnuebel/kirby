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

const compilerHtmlTask = () => {
  // Simple Copy Files
  gulp.src([kc.src.structure + '**/**', kc.src.structure + '**/.*'])
    .pipe(global.checkChanged === true ? $.changed(kc.dist.markup) : gutil.noop())
    .pipe(gulp.dest(kc.dist.markup))
}

gulp.task('compiler:html', compilerHtmlTask)
module.exports = compilerHtmlTask
