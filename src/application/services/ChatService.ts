import { injectable } from 'tsyringe';
import { fileURLToPath } from 'url';
import path from 'path';
import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';
import { ChatServiceInputPort } from '../ports/input/ChatServiceInputPort';
import { BadRequestError } from '../../utils/errors/BadRequestError';
import { OutputChatDto } from '../dto/ChatDto';

@injectable()
export class ChatService implements ChatServiceInputPort {
  context: string = 'AWS Cloud Services';
  constructor() {}

  async sendPrompt(prompt: string): Promise<OutputChatDto> {
    if (!prompt) {
      throw new BadRequestError('BadRequestError', [
        'Prompt é um campo obrigatório.',
      ]);
    }
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const model = new LlamaModel({
      modelPath: path.join(
        __dirname,
        '..',
        '..',
        '..',
        'models',
        'llama-2-7b-chat.Q2_K.gguf',
      ),
    });

    const context = new LlamaContext({ model, threads: 4 });
    const session = new LlamaChatSession({ context });

    const question = `Pergunta sobre ${this.context}: ${prompt}`;
    console.log('User: ' + question);

    const response = await session.prompt(question);
    console.log('AI:' + response);

    return {
      response,
    };
  }
}
