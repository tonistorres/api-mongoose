import { Document, Schema, model } from 'mongoose';

export interface IBook extends Document {

    name: string,
    alignment: string,
    gender: string,
    race: string,
    aspects: {
        eyeColor: string,
        hairColor: string,
        skinColor: string,
        height: number,
        weight: number,
    },
}

const bookSchema = new Schema<IBook>({

    name: {
        type: String,
        required: true,
    },

    alignment: {
        type: String,
        required: false,
    },

    gender: {
        type: String,
        required: false,
    },

    race: {
        type: String,
        required: false,
    },

    aspects: {
        eyeColor: {
            type: String,
            required: false,
        },

        hairColor: {
            type: String,
            required: false,
        },

        skinColor: {
            type: String,
            required: false
        },
        height: {
            type: Number,
            required: false
        },
        weight: {
            type: Number,
            required: false
        }


    }

})

export const bookMongooseModel = model<IBook>('cinema', bookSchema);