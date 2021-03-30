'use strict'
const Cardapio= use('App/Models/Cardapio')
class CardapioController {
    async store({request, response, auth}) {
        const cardapio = request.all();
        const cardapio_criado = await Cardapio.create(cardapio);
        return response.send(cardapio_criado);
    }
    async destroy ({params, response}) {
        const cardapios = await Cardapio.find(params.id);
        await cardapio.delete();
        return response.send(cardapio)
    }
    async show ({response}) {
        const cardapios = await Cardapio.all();
        return response.send(cardapios)
    }
    async update ({request, response, params}){
        let cardapio = await Cardapio.find(params.id);
        const cardapio2 = request.all()
        await Cardapio.query().where('id', params.id).update(cardapio2)
        return response.send(cardapio)
    }
}

module.exports = CardapioController
