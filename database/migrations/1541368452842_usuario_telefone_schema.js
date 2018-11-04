'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioTelefoneSchema extends Schema {
  up () {
    this.create('USUARIO_TELEFONE', (table) => {
      table.increments('ID')
      table.integer('ID_USUARIO').references('ID').inTable('USUARIO')
      table.integer('ID_TELEFONE').refernces('ID').inTable('TELEFONE')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('USUARIO_TELEFONE')
  }
}

module.exports = UsuarioTelefoneSchema
