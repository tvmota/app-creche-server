'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiarioAvisoSchema extends Schema {
  up () {
    this.create('DIARIO_AVISO', (table) => {
      table.increments('ID')
      table.integer('ID_DIARIO').references('ID').inTable('DIARIO')
      table.integer('ID_AVISO').references('ID').inTable('AVISO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('DIARIO_AVISO')
  }
}

module.exports = DiarioAvisoSchema
