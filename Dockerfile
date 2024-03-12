FROM node:20-alpine

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app

COPY --chown=app package*.json ./

RUN npm install

COPY --chown=app . .

ADD --chown=app https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q2_K.gguf models/llama-2-7b-chat.Q2_K.gguf

EXPOSE 4009

CMD ["npm", "run", "dev"]