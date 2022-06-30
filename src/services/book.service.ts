import BookModel from "../models/book.model";
import { IBook } from "../models/schemas/book.schema";

export default class BookService {
    private bookModel: BookModel;

    constructor() {
        this.bookModel = new BookModel();
    }

    public async insertBook(book: IBook): Promise<IBook | null> {
        const bookCreated = await this.bookModel.insertBook(book);
        return bookCreated;
    }

    public async getBooks(): Promise<IBook[] | null> {
        const books = await this.bookModel.getBooks();
        return books;
    }
}