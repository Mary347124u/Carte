'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PratosSchema extends Schema {
  up () {
    this.create('pratos', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 254).notNullable()
      table.float('valor').notNullable()
      table.integer('id_cardapio').notNullable().unsigned().references('id').inTable('cardapios').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('pratos')
  }
}

module.exports = PratosSchema
