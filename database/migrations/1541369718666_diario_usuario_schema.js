'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiarioUsuarioSchema extends Schema {
  up () {
    this.create('DIARIO_USUARIO', (table) => {
      table.increments('ID')
      table.integer('ID_USUARIO').references('ID').inTable('USUARIO')
      table.integer('ID_DIARIO').references('ID').inTable('DIARIO')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('DIARIO_USUARIO')
  }
}

module.exports = DiarioUsuarioSchema
