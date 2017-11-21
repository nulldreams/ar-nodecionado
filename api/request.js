const http = require('./http')
const config = {
  user: '__user',
  hash: '__hash'
}

exports.list = (cb) => {
  var data = `usr=${config.user}&psw=&hash=${config.hash}&contype=0`
  http(data, cb)
}

exports.stop = (sala, cb) => {
  var data = `location=${sala.nome}&run=0&temp=23&mode=0&fan=1&louver=4&bOnOff=1&bMode=1&bTemp=0&bFan=0&bLouver=0&setBy=0&change=0&slot=0&ou=${sala.ue}&iu=${sala.ui}&usr=${config.user}&hash=${config.hash}&Con=0`
  http(data, cb)
}

exports.start = (sala, cb) => {
  var data = `location=${sala.nome}&run=1&temp=23&mode=0&fan=1&louver=4&bOnOff=0&bMode=1&bTemp=0&bFan=0&bLouver=0&setBy=0&change=0&slot=0&ou=${sala.ue}&iu=${sala.ui}&usr=${config.user}&hash=${config.hash}&Con=0`
  http(data, cb)
}
