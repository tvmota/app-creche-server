'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoResponsavelSchema extends Schema {
  up () {
    this.create('ALUNO_RESPONSAVEL', (table) => {
      table.increments('ID')
      table.integer('ID_ALUNO').references('ID').inTable('ALUNO')
      table.integer('ID_USUARIO').references('ID').inTable('USUARIO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('ALUNO_RESPONSAVEL')
  }
}

module.exports = AlunoResponsavelSchema
