import { ACTIONS_CORS_HEADERS_MIDDLEWARE } from '@solana/actions';
import cors from 'cors';
import primate from '@thewebchimp/primate';
import { router as ai } from './routes/ai.js';
import { router as defaultRouter } from './routes/default.js';

primate.setup();
await primate.start();
primate.app.use('/', defaultRouter);
primate.app.use('/ai', ai);
