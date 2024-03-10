import { container } from 'tsyringe';
import { Request, Response, Router } from 'express';
import { InjectionTokens } from '../../../utils/types/InjectionTokens';
import { ChatController } from '../controllers/ChatController';
import { ChatService } from '../../../application/services/ChatService';

container.register(InjectionTokens.CHAT_SERVICE_INPUT_PORT, {
  useClass: ChatService,
});
container.register(InjectionTokens.CHAT_CONTROLLER, {
  useClass: ChatController,
});

const chatRoutes = Router();
const chatController: ChatController = container.resolve('ChatController');

chatRoutes.post('/chat', async (request: Request, response: Response) => {
  return await chatController.send(request, response);
});

export { chatRoutes };
