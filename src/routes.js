import { Router } from 'express';

import  projectsController from './controllers/projectsController';
import  tasksController from './controllers/tasksController';
import  authController from './controllers/authController';

const router = Router();

router.use('/projects', projectsController);
router.use('/tasks', tasksController);
router.use('/auth', authController);

export default router