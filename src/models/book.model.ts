import { Model } from 'mongoose';
import { IBook, bookMongooseModel } from './schemas/book.schema';

export default class MovieModel {

    private bookMongooseModel: Model<IBook>;

    constructor() {
        this.bookMongooseModel = bookMongooseModel;
    }

    public async insertBook(book: IBook): Promise<IBook | null> {
        const bookCreated = await this.bookMongooseModel.create(book);
        return bookCreated;
    }

    public async getBooks(): Promise<IBook[] | null> {
        const books = await this.bookMongooseModel.find();
        return books;
    }
}