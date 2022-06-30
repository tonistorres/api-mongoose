import { Request, Response } from 'express';
import BookService from "../services/book.service";

export default class BookController {

    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    public async getBooks(req: Request, res: Response): Promise<Response> {
        try {
            const books = await this.bookService.getBooks();
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ message: 'internal error' });
        }
    };

    public async insertBook(req: Request, res: Response): Promise<Response> {
        try {
            const { body: bookData } = req;
            const book = await this.bookService.insertBook(bookData);
            return res.status(201).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'internal error' });
        }
    };

}