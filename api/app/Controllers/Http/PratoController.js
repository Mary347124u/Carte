'use strict'
const Prato= use('App/Models/Prato')
class PratoController {
    

        async store({request, response, auth}) {
            const prato = request.all();
            const prato_criado = await Prato.create(prato);
            return response.send(prato_criado);
        }
        async destroy ({params, response}) {
            const prato = await Prato.find(params.id);
            await prato.delete();
            return response.send(prato)
        }
        async show ({response}) {
            const pratos = await Prato.all();
            return response.send(pratos)
        }
        async update ({request, response, params}){
            let prato = await Prato.find(params.id);
            const prato2 = request.all()
            await Prato.query().where('id', params.id).update(prato2)
            return response.send(prato)
        }
}

module.exports = PratoController
