'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TelefoneSchema extends Schema {
  up () {
    this.create('TELEFONE', (table) => {
      table.increments('ID')
      table.integer('ID_TIPO_TELEFONE').references('ID').inTable('TIPO_TELEFONE')
      table.integer('NUMERO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('TELEFONE')
  'ID'}
  table.integer('ID_TIPO_TELEFONE').references('ID').inTable('TIPO_TELEFONE')
}

module.exports = TelefoneSchema
