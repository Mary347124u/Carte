'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//get:mostra
//post:cria
//put:Atualiza
//Delete:remove

//Rotas de usuario
Route.post('/users','UserController.store')
Route.delete('/users/:id','UserController.destroy')
Route.put('/users/:id','UserController.update')
Route.get('/users','UserController.show')

//Rotas de restaurante
Route.post('/restaurantes','RestauranteController.store')
Route.delete('/restaurantes/:id','RestauranteController.destroy')
Route.put('/restaurantes/:id','RestauranteController.update')
Route.get('/restaurantes','RestauranteController.show')

//Rotas de pratos
Route.post('/pratos','PratoController.store')
Route.delete('/pratos/:id','PratoController.destroy')
Route.put('/pratos/:id','PratoController.update')
Route.get('/pratos','PratoController.show')

//Rotas de cardapios
Route.post('/cardapios','CardapioController.store')
Route.delete('/cardapios/:id','CardapioController.destroy')
Route.put('/cardapios/:id','CardapioController.update')
Route.get('/cardapios','CardapioController.show')


