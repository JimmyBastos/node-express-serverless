import { Router } from 'express'
import config from '../config'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello from serverless express!'
  })
})

routes.use((req, res, next) => {
  return res.status(404).json({
    error: true,
    message: 'Not found!'
  })
})

export default routes
