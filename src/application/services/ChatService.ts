import { injectable } from 'tsyringe';
import { fileURLToPath } from 'url';
import path from 'path';
import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';
import { ChatServiceInputPort } from '../ports/input/ChatServiceInputPort';
import { BadRequestError } from '../../utils/errors/BadRequestError';
import { OutputChatDto } from '../dto/ChatDto';

@injectable()
export class ChatService implements ChatServiceInputPort {
  private readonly theme: string = 'AWS Serviços';
  private readonly session: LlamaChatSession;
  private readonly context: LlamaContext;
  
  constructor() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let model = new LlamaModel({
      modelPath: path.join(
        __dirname,
        '..',
        '..',
        '..',
        'models',
        'llama-2-7b-chat.Q2_K.gguf',
      ),
    });

    this.context = new LlamaContext({ model, threads: 4 });
    this.session = new LlamaChatSession({ context: this.context });
  }

  async sendPrompt(prompt: string): Promise<OutputChatDto> {
    if (!prompt) {
      throw new BadRequestError('BadRequestError', [
        'Prompt é um campo obrigatório.',
      ]);
    }

    const question = `${this.theme}: ${prompt}`;
    console.log('User: ' + question);

    const response = await this.session.prompt(question);
    console.log('AI:' + response);

    return {
      response,
    };
  }
}
