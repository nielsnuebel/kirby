/**
 * Template Files
 * Pick the right filetype for the Watch Tasks
 */
import kc from '../../config.json'

const templateFiles = () => {
  return [kc.src.structure + 'templates/**/*',kc.src.structure + 'snippets/**/*',kc.src.structure + 'controllers/**/*']
}

module.exports = templateFiles
