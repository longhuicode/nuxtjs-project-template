import config from '~~/config'
const isProdData = window.location.host === 'test.com'
const hostname = isProdData ? 'test.com' : 'test2.com'

export default {
  isProdData,
  appNmae: config.appNmae,
  hostname,
  domain: `https://${hostname}/`,
  description: config.description,
  host: '0.0.0.0',
  servicesApi: isProdData ? 'https://api.test.com/v1' : 'https://test-api.test.com/v1',
  googleAnalyticsId: '',
  sentryDsn: ''
}
