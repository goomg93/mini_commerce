import 'dotenv/config'
import Express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dbUtil from './utils/db.util';
import * as testModel from './test.model';

const main = async () => {
	await Promise.all([dbUtil.init()]);

	const app = Express();
	app.use(bodyParser.json());
	app.get('/', (_: Request, res: Response) => res.send('pong'));
	app.get('/test', async (_: Request, res: Response) => {
		const msg = await testModel.getMessage();
		res.send(msg);
	});
	
	await new Promise((resolve) => {
		const svr = app.listen(process.env.PORT, () => {
			resolve(svr);
		});
	});
	console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
};

main().catch((error) => {
	console.log(error, 'error');
});
