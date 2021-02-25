'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardapiosSchema extends Schema {
  up () {
    this.create('cardapios', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cardapios')
  }
}

module.exports = CardapiosSchema
