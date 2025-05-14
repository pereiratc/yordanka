import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'Yordanka API is live!' });
});

export default router;
