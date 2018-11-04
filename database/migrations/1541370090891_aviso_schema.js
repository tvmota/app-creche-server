'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvisoSchema extends Schema {
  up () {
    this.create('AVISO', (table) => {
      table.increments('ID')
      table.string('TEXTO', 2000)
      table.specificType('IMAGEM', 'MEDIUMTEXT')
      table.specificType('STATUS', 'TINYINT')
      table.timestamps()
    })
  }

  down () {
    this.drop('AVISO')
  }
}

module.exports = AvisoSchema
