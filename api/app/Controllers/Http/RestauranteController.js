'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Restaurante = use('App/Models/Restaurante')

class RestauranteController {
    async store({request, response, auth}) {
        const restaurante = request.all();
        const restaurante_criado = await Restaurante.create(restaurante);
        return response.send(restaurante_criado);
    }
    async destroy ({params, response}) {
        const restaurante = await Restaurante.find(params.id);
        await Restaurante.delete();
        return response.send(restaurante)
    }
    async show ({response}) {
        const restaurantes = await Restaurante.all();
        return response.send(restaurantes)
    }
    async update ({request, response, params}){
        let restaurante = await Restaurante.find(params.id);
        const restaurante2 = request.all()
        await Restaurante.query().where('id', params.id).update(restaurante2)
        return response.send(restaurante)
    }
}

module.exports = RestauranteController
