'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'appCreche'),
  appCreche: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', '13306'),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', '123456'),
      database: Env.get('DB_DATABASE', 'app_creche')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
