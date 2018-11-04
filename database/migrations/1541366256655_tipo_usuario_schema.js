'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoUsuarioSchema extends Schema {
  up () {
    this.create('TIPO_USUARIO', (table) => {
      table.increments('ID')
      table.string('NOME', 60)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('TIPO_USUARIO')
  }
}

module.exports = TipoUsuarioSchema
