module.exports = (data, cb) => {
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      cb(null, this.responseText)
    }
  })

  xhr.open('POST', '__PANEL_URL')
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr.setRequestHeader('cache-control', 'no-cache')
  xhr.setRequestHeader('postman-token', '3425df22-bb41-b395-f547-fc9f478ea55c')

  xhr.send(data)
}
