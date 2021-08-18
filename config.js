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
  domain: isProd ? `https://${hostname}/` : `https://${hostname}/`,
  servicesApi: isProd ? 'https://auction-api.bestdas.com/v1' : 'https://auction-test-api.bestdas.com/v1',
  googleAnalyticsId: 'G-XG4LQ1N702',
  sentryDsn: 'https://276cbab5c8764b3a8155369cc31a65da@sentry.blockabc.com/15'
}
