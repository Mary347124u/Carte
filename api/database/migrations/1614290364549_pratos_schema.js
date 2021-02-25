'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PratosSchema extends Schema {
  up () {
    this.create('pratos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pratos')
  }
}

module.exports = PratosSchema
