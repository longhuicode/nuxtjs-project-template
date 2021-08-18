const config = require('./config')

function generateApp (env, port) {
  const isProd = env === 'production'
  const appName = isProd ? config.appNmae : `${config.appNmae}-${env}`

  return {
    name: appName,
    script: 'node_modules/.bin/nuxt',
    args: ['start'],
    instances: 1,
    exec_mode: 'cluster',
    watch: false,
    error_file: `logs/${appName}.stderr.log`,
    out_file: `logs/${appName}.stdout.log`,
    log_date_format: 'MM-DD HH:mm:ss',
    kill_timeout: 10 * 1000, // ms
    listen_timeout: 10 * 1000, // ms
    env: {
      NODE_ENV: isProd ? 'production' : 'development',
      PORT: port
    }
  }
}

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    generateApp('production', config.port),
    generateApp('test1', config.port + 1)
  ]
}
