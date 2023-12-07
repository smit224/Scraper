import { collect, webhook, getQuery, registration } from '@src/controllers';
import { login } from '@src/controllers/login';
import { Router } from 'express';

const apiRouter = Router();

apiRouter.post('/collect', collect);
apiRouter.post('/webhook', webhook);
apiRouter.get('/query', getQuery);
apiRouter.post('/registration', registration);
apiRouter.post('/login', login);

export default apiRouter;
