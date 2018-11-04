'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiarioAlimentacaoSchema extends Schema {
  up () {
    this.create('DIARIO_ALIMENTACAO', (table) => {
      table.increments('ID')
      table.integer('ID_DIARIO').references('ID').inTable('DIARIO')
      table.integer('ID_ALIMENTACAO').references('ID').inTable('ALIMENTACAO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('DIARIO_ALIMENTACAO')
  }
}

module.exports = DiarioAlimentacaoSchema
