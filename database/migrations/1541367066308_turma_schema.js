'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('TURMA', (table) => {
      table.increments('ID')
      table.string('NOME', 60)
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('TURMA')
  }
}

module.exports = TurmaSchema
