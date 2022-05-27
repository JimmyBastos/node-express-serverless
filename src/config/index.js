const config = Object.freeze({
  app: {
    dev: process.env.NODE_ENV === 'development',
    prod: process.env.NODE_ENV === 'production',
    port: process.env.APP_PORT || 3333
  }
})

export default config
