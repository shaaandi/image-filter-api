import { Router, Request, Response } from 'express';
import { filteredImageRouter } from './filteredImage/filteredImage';

const router: Router = Router();

router.use('/filteredImage', filteredImageRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send(`V0`);
});

export const IndexRouter: Router = router;
