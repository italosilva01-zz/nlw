import express, { request, response } from 'express';
import knex from './database/connection'

import PointsController from './controllers/PointsControllers';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();
const pointsController = new PointsController();
const itemsControllers = new ItemsControllers();


routes.get('/items',itemsControllers.index);

routes.post('/points',pointsController.create);

routes.get('/points/:id',pointsController.show);

routes.get('/points',pointsController.index);

export default routes;
