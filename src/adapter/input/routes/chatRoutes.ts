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
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat-related operations
 */

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Enviar mensagem ao chat
 *     tags: [Chat]
 *     parameters:
 *       - in: body
 *         name: question
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             prompt:
 *               type: string
 *         description: Question object
 *     responses:
 *       200:
 *         description: Messagem enviada com sucesso
 *       400:
 *         description: Bad request, cheque seu payload
 */
const chatRoutes = Router();
const chatController: ChatController = container.resolve('ChatController');

chatRoutes.post('/chat', async (request: Request, response: Response) => {
  return await chatController.send(request, response);
});

export { chatRoutes };
