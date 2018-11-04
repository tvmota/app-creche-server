'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassificacaoAlimentacaoSchema extends Schema {
  up () {
    this.create('CLASSIFICACAO_ALIMENTACAO', (table) => {
      table.increments('ID')
      table.string('NOME', 45)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('CLASSIFICACAO_ALIMENTACAO')
  }
}

module.exports = ClassificacaoAlimentacaoSchema
