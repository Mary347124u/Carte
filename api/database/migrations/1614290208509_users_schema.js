'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('email',254).notNullable().unique()
      table.string('senha',254).notNullable()
      table.string('nome', 254).notNullable()
      
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
