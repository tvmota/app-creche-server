'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoAlimentacaoSchema extends Schema {
  up () {
    this.create('TIPO_ALIMENTACAO', (table) => {
      table.increments('ID')
      table.string('NOME', 45)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('TIPO_ALIMENTACAO')
  }
}

module.exports = TipoAlimentacaoSchema
