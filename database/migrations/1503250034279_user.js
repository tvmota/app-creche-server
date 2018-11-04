'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('USUARIO', (table) => {
      table.increments('ID')
      table.integer('ID_TIPO_USUARIO').unsigned().references('ID').inTable('TIPO_USUARIO')
      table.string('NOME', 80)
      table.string('EMAIL', 254).notNullable().unique()
      table.string('PASSWORD', 60).notNullable()
      table.string('RG', 30)
      table.specificType('CPF', 'SMALLINT')
      table.specificType('FOTO', 'MEDIUMTEXT')
      table.specificType('AUTORIZADO', 'TINYINT')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
