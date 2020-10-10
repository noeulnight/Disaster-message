const fetch = require('node-fetch')

module.exports = () => {
  return new Promise( async (resolve) => {
    let response = await fetch('http://www.safekorea.go.kr/idsiSFK/neo/ext/json/disasterNewsList/disasterNewsList.json', {method: 'GET'})
    let json = await response.json()
    resolve(json)
  })
}