import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import PlanController from './app/controllers/PlanController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Vrau' });
});
/**
 * Student's routes group
 */
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);
/**
 * Plan's routes group
 */
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

/**
 * Auth's routes group
 */
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/students', StudentController.update);
export default routes;
