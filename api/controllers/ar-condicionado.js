const utils = {
  request: require('../request'),
  crawler: require('../crawler')
}

exports.list = (req, reply) => {
  utils.request.list((err, response) => {
    if (err) reply.code(500).send({ message: err })

    utils.crawler.montarObjeto({ body: response, query: req.query }, (err, gadgets) => {
      if (err) reply.code(500).send({ message: err })

      reply.code(200).send({ gadgets })
    })
  })
}

exports.turnon = (req, reply) => {
  if (!req.body) reply.code(500).send({ message: 'incorrect infos' })

  utils.request.start(req.body, (err, response) => {
    if (err) reply.code(500).send({ message: err })

    reply.code(200).send({ message: 'Wait a few seconds, it takes a while to turn on the gadget 😀' })
  })
}

exports.turnoff = (req, reply) => {
  if (!req.body) reply.code(500).send({ message: 'incorrect infos' })

  utils.request.stop(req.body, (err, response) => {
    if (err) reply.code(500).send({ message: err })

    reply.code(200).send({ message: 'Ok, we\'re turning off 😀' })
  })
}
