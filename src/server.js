import 'dotenv/config'
import app from './app'
import config from './config'

app.listen(config.app.port, () => {
  console.log('Server started at port:', config.app.port)
})
