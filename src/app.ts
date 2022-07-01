import express from 'express';
import bookRoutes from './routes/book.routes';

export default class App {
  public express: express.Application;
  
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(bookRoutes);
  }

  public start(port: number | string = 3001) {
    this.express
      .listen(port, () => console.log(`Server Port: http://localhost:${port}`));
  }
}