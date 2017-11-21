const controllers = {
  arcondicionado: require('./controllers/ar-condicionado')
}

module.exports = (fastify) => {
  fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      done(data)
    })
  })

  fastify.get('/gadgets', controllers.arcondicionado.list)
  fastify.post('/turnon', controllers.arcondicionado.turnon)
  fastify.post('/turnoff', controllers.arcondicionado.turnoff)
}
