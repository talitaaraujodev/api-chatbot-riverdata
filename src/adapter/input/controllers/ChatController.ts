import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AppConstantes } from '../../../application/appConstantes';
import { BaseError } from '../../../utils/errors/BaseError';
import { InjectionTokens } from '../../../utils/types/InjectionTokens';
import { ChatServiceInputPort } from '../../../application/ports/input/ChatServiceInputPort';

@injectable()
export class ChatController {
  constructor(
    @inject(InjectionTokens.CHAT_SERVICE_INPUT_PORT)
    private chatServiceInputPort: ChatServiceInputPort,
  ) {}

  async send(request: Request, response: Response): Promise<Response> {
    try {
      return response
        .status(200)
        .json(await this.chatServiceInputPort.sendPrompt(request.body.prompt));
    } catch (e) {
      if (e instanceof BaseError) {
        return response
          .status(AppConstantes.httpStatus.OK)
          .json({ message: e.message, status: e.code, errors: e.errors });
      }
      console.error(e);
      return response.json(e).status(AppConstantes.httpStatus.ERROR_SERVER);
    }
  }
}
