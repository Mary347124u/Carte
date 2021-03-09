'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantesSchema extends Schema {
  up () {
    this.create('restaurantes', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 254).notNullable()
      table.string('endereco', 254).notNullable()
      table.integer('id_usuario').notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('restaurantes')
  }
}

module.exports = RestaurantesSchema
