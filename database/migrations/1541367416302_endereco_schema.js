'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('ENDERECO', (table) => {
      table.increments('ID')
      table.string('LOGRADOURO', 600)
      table.specificType('NUMERO', 'MEDIUMINT')
      table.specificType('CEP', 'MEDIUMINT')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('ENDERECO')
  }
}

module.exports = EnderecoSchema
