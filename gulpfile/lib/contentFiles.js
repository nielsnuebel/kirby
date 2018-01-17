/**
 * Template Files
 * Pick the right filetype for the Watch Tasks
 */
import kc from '../../config.json'

const contentFiles = () => {
  return [kc.src.base + 'content/**/*']
}

module.exports = contentFiles
