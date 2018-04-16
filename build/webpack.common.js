const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const STATIC_PATH = path.resolve(APP_PATH, 'static')
const BUILD_DIR = 'dist'
const BUILD_PATH = path.resolve(ROOT_PATH, BUILD_DIR)
const SRC_PATH = path.resolve(BUILD_PATH, 'assets')
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules')
const INDEX_FILE_PATH = path.resolve(APP_PATH, 'app.js')
const TEMPLATE_FILE_PATH = path.resolve(STATIC_PATH, 'index.html')
const TEMPLATE_ICO_PATH = path.resolve(STATIC_PATH, 'favicon.ico')
const publicPath = 'assets/'
const port = 8008
const CSS_LOADER_INCLUDE = [
  APP_PATH,
  path.resolve(NODE_MODULES_PATH, 'nprogress'),
]

module.exports = {
  ROOT_PATH,
  APP_PATH,
  BUILD_DIR,
  BUILD_PATH,
  SRC_PATH,
  NODE_MODULES_PATH,
  INDEX_FILE_PATH,
  TEMPLATE_FILE_PATH,
  TEMPLATE_ICO_PATH,
  publicPath,
  port,
  CSS_LOADER_INCLUDE,
}
