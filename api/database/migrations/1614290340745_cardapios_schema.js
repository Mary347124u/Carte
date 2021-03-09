'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardapiosSchema extends Schema {
  up () {
    this.create('cardapios', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 254).notNullable()
      table.text('icone').notNullable()
      table.integer('id_restaurante').notNullable().unsigned().references('id').inTable('restaurantes').onDelete('CASCADE').onUpdate('CASCADE')

    })
  }

  down () {
    this.drop('cardapios')
  }
}

module.exports = CardapiosSchema
