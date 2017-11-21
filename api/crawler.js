const cheerio = require('cheerio')
const _ = require('lodash')
const names = require('./controllers/mapping.json')

exports.montarObjeto = (response, cb) => {
  const $ = cheerio.load(response.body)

  let gadgets = []

  for (let i = 0; i < $('.avaliableUnitsTable').find('tr').length; i++) {
    let name = $('.avaliableUnitsTable').find('tr').eq(i).find('td').eq(0).text().trim().split(',').reverse()[0].trim()
    let ue = $('.avaliableUnitsTable').find('tr').eq(i).find('td').eq(0).text().trim().split(',')[1].trim()
    ue = ue.substring(3, ue.length).trim()

    let temperature = name.substring(name.indexOf('ºC') - 5, name.length).replace(/\n/g, '')
    let on = ($('.avaliableUnitsTable').find('tr').eq(i).attr('class').trim() === 'avaliableUnitsRowRunning').toString()
    let ui = name.substring(0, name.indexOf('- ')).trim().replace('UI: ', '')
    name = names[name.substring(0, name.indexOf('\n')).replace(`UI: ${ui} - `, '')]

    gadgets.push({
      name,
      ui,
      temperature,
      on,
      ue
    })
  }

  if (response.query) return cb(null, queryOn(response.query, gadgets))

  cb(null, gadgets)
}

function queryOn (query, aparelhos) {
  return _.filter(aparelhos, query)
}
