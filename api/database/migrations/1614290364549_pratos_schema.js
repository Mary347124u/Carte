'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PratosSchema extends Schema {
  up () {
    this.create('pratos', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 254).notNullable()
      table.string('valor', 254).notNullable()
    })
  }

  down () {
    this.drop('pratos')
  }
}

module.exports = PratosSchema
