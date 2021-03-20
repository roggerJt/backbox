/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

//Vista inicial
Route.get('/', 'AppsController.index').as('index')

//crear proyecto base
Route.get('/create', 'AppsController.create').as('app.create')

//guardar proyecto base
Route.post('/store', 'AppsController.store').as('app.store')

//resultado
Route.get('/show/:project_id', 'AppsController.show').as('app.show')



//verifica conexión a la BD habilitar la healthCheck dentro del archivo config/database.ts
Route.get('/health', async ({ response }) => {
    const report = await HealthCheck.getReport()
    
    return report.healthy
      ? response.ok(report)
      : response.badRequest(report)
  })


