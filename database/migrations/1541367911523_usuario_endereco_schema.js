'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioEnderecoSchema extends Schema {
  up () {
    this.create('USUARIO_ENDERECO', (table) => {
      table.increments('ID')
      table.integer('ID_USUARIO').references('ID').inTable('USUARIO')
      table.integer('ID_ENDERECO').references('ID').inTable('ENDERECO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('USUARIO_ENDERECO')
  }
}

module.exports = UsuarioEnderecoSchema
