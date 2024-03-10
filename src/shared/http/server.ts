import 'reflect-metadata';
import { chatRoutes } from '../../adapter/input/routes/chatRoutes';
import app from './App';
import envConfig from '../../config/envConfig';

app.listen(envConfig.serverPort, [chatRoutes]);
