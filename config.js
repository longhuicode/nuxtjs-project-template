const packageJson = require('./package.json')
// const isProd = process.env.NODE_ENV !== 'development'
const isProd = true
const hostname = isProd ? 'bestdas.com' : 'test1.bestdas.com'

module.exports = {
  isProd,
  appNmae: packageJson.name,
  description: packageJson.description,
  host: '0.0.0.0',
  hostname,
  port: process.env.PORT || 10200,
  domain: `https://${hostname}/`,
  servicesApi: isProd ? 'https://api.test.com/v1' : 'https://test-api.test.com/v1',
  googleAnalyticsId: '',
  sentryDsn: ''
}
