import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'

import { errors } from 'celebrate'

const app = express()

app.use(express.json())

app.use(cors())
app.use(helmet())

app.use(morgan('dev'))

app.use(cookieParser())

app.use(routes)

app.use(errors({ statusCode: 422 }))

export default app
