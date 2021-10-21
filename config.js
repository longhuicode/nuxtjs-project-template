const packageJson = require('./package.json')
const isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  isProd,
  appNmae: packageJson.name,
  description: packageJson.description,
  hostname: 'test.com',
  host: '0.0.0.0',
  port: process.env.PORT || 10200,
  googleAnalyticsId: '',
  sentryDsn: ''
}
