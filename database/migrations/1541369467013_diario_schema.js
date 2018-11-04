'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiarioSchema extends Schema {
  up () {
    this.create('DIARIO', (table) => {
      table.increments('ID')
      table.integer('ID_ALUNO').references('ID').inTable('ALUNO')
      table.string('OBSERVACOES', 2000)
      table.specificType('DORMIU', 'TINYINT')
      table.specificType('HORAS_SONO', 'TINYINT')
      table.specificType('EVACUACAO', 'TINYINT')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('DIARIO')
  }
}

module.exports = DiarioSchema
