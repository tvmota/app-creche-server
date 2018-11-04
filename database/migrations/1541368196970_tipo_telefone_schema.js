'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoTelefoneSchema extends Schema {
  up () {
    this.create('TIPO_TELEFONE', (table) => {
      table.increments('ID')
      table.string('NOME', 45)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('TIPO_TELEFONE')
  }
}

module.exports = TipoTelefoneSchema
