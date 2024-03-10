import { OutputChatDto } from "../../dto/ChatDto";

export interface ChatServiceInputPort {
  sendPrompt(prompt: string): Promise<OutputChatDto>;
}
