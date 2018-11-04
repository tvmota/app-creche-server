'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlimentacaoSchema extends Schema {
  up () {
    this.create('ALIMENTACAO', (table) => {
      table.increments('ID')
      table.integer('ID_TIPO_ALIMENTACAO').references('ID').inTable('TIPO_ALIMENTACAO')
      table.integer('ID_CLASSIFICACAO_ALIMENTACAO').references('ID').inTable('CLASSIFICACAO_ALIMENTACAO')
      table.string('ALIMENTO', 240)
      table.specificType('QUANTIDADE', 'TINYINT')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('ALIMENTACAO')
  }
}

module.exports = AlimentacaoSchema
