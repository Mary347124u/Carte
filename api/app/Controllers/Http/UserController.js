'use strict'
//Store:Cria
//Update:Atualizar
//Show:Mostrar
//Index:Mostrar um especifico
//Destroy:deleta/remove

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {

    async store({request, response, auth}) {
        const usuario = request.all();
        const usuario_criado = await User.create(usuario);
        return response.send(usuario_criado);
    }
    async destroy ({params, response}) {
        const users = await User.find(params.id);
        await user.delete();
        return response.send(user)
    }
    async show ({response}) {
        const users = await User.all();
        return response.send(users)
    }
    async update ({request, response, params}){
        let user = await User.find(params.id);
        const usuario = request.all()
        await User.query().where('id', params.id).update(usuario)
        return response.send(user)
    }
}


module.exports = UserController
