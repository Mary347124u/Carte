'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prato extends Model {

    static get table () {
        return 'pratos';
    }

}

module.exports = Prato
