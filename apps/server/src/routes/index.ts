import { Router } from 'express';
import userRoutes from './user.route';

const router = Router();

router.use('/users', userRoutes);

router.get('/', (_, res) => {
  res.json({ message: 'Yordanka API is live!' });
});

export default router;
