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
    })
  }

  down () {
    this.drop('restaurantes')
  }
}

module.exports = RestaurantesSchema
