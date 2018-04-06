import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import historyApiFallback from 'connect-history-api-fallback'

import webpackConfig from '../webpack/webpack.dev.js'

const app = express()
const port = 3006

const compiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  watchOptions: {
    ignored: /node_modules/
  },
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true
  }
})

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))
app.use(historyApiFallback({
  verbose: false
}))

app.use('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, '../index.html')

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }

    res
      .set('content-type','text/html')
      .send(result)
      .end()
  })
})

app.listen(port, () => console.log(`dev-server started at ${port}`))
