'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicamentoSchema extends Schema {
  up () {
    this.create('MEDICAMENTO', (table) => {
      table.increments('ID')
      table.string('NOME', 120)
      tbale.time('HORARIO')
      table.string('DOSAGEM', 60)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('MEDICAMENTO')
  }
}

module.exports = MedicamentoSchema
