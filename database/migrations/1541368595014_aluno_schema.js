'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('ALUNO', (table) => {
      table.increments('ID')
      table.integer('ID_TURMA').references('ID').inTable('TURMA')
      table.string('NOME', 80)
      table.date('DATA_NASCIMENTO')
      table.specificType('FOTO', 'MEDIUMTEXT')
      table.date('DATA_MATRICULA')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('ALUNO')
  }
'ID'}


module.exports = AlunoSchema
