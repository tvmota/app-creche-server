'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiarioMedicamentoSchema extends Schema {
  up () {
    this.create('DIARIO_MEDICAMENTO', (table) => {
      table.increments('ID')
      table.integer('ID_DIARIO').references('ID').inTable('DIARIO')
      table.integer('ID_MEDICAMENTO').references('ID').inTable('MEDICAMENTO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('DIARIO_MEDICAMENTO')
  }
}

module.exports = DiarioMedicamentoSchema
