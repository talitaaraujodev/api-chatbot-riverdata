import { fileURLToPath } from 'url';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express, { Router } from 'express';
import cors from 'cors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Chat AWS',
      version: '1.0.0',
      description:
        'API REST no qual é possível utilizar um chat conversional integrando o modelo de linguagem LLAMA 2.',
    },
  },
  apis: [
    path.join(__dirname, '..', '..', 'adapter', 'input', 'routes', '*.ts'),
  ],
};
const specs = swaggerJsdoc(options);
export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  public listen(port: number, routes: Router[]): void {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
    this.app.use(routes);
    this.app.listen(port, () => {
      console.log(`Server is running on: http://localhost:${port}`);
    });
  }
}
export default new App();
