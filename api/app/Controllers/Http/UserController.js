'use strict'
//Store:Cria
//Update:Atualizar
//Show:Mostrar
//Index:Mostrar um especifico

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {
    async store({request, response, auth}) {
        const usuario = request.all();
        const usuario_criado = User.create(usuario);
        return response.send(usuario_criado);
    }
}

module.exports = UserController
