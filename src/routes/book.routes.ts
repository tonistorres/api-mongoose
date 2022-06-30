import { Router } from 'express';
import BookController from '../controllers/book.controller';

const bookRoutes = Router();

const bookController = new BookController();

bookRoutes.get('/books', (req, res) => bookController.getBooks(req, res));
bookRoutes.post('/books', (req, res) => bookController.insertBook(req, res));

export default bookRoutes;